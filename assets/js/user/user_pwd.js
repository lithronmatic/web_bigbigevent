$(function(){
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd:[/^[\S]{6,12}$/,'密码必须6~12位,且不能出现空格'],
        samepwd:function(value){
            if(value == $("input[name=oldPwd]").val()){
                return "新密码与旧密码不能相同!"
            }
        },
        repwd:function(value){
            if(value !== $("input[name=newPwd]").val()){
                return "两次密码不一致，请重新输入!"
            }
        }
    })

    // 修改密码表单提交事件
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url:'/my/updatepwd',
            data:$(this).serialize(),
            success:function(res){
                if(res.status!=0){
                    return layer.msg('更新密码失败!')
                }
                layer.msg('更新密码成功!')
                // 重置密码
                $('.layui-form')[0].reset()
            }
        })
    })
})