// $(function(){
//     // 点击"去注册账号"的链接
//     $("#link_reg").on("click",function(){
//         $(".login-box").hide();
//         $(".reg-box").show();
//     });

//     // 点击"去登录"的链接
//     $("#link_login").on("click",function(){
//         $(".login-box").show();
//         $(".reg-box").hide();
//     })

//     // 从layui中获取form对象
//     var form = layui.form;
//     // 从layui中获取layer对象
//     var layer = layui.layer;
//     // 通过form.verify()函数自定义校验规则
//     form.verify({
//         // 自定义pwd校验规则
//         pwd: [
//             /^[\S]{6,12}$/
//             ,'密码必须6到12位，且不能出现空格'
//           ],
//         //   校验再次确认密码的规则
//         repwd:function(value,item){//value是表单的值
//             var pwd = $(".reg-box input[name=password]").val();  
//             if(pwd!==value){
//                 return '两次密码不一致';
//             }
//         } 
//     });

//     // 监听注册表单的提交事件
//     $("#form_reg").on("submit",function(e){
//         e.preventDefault();
//         $.post('/api/reguser',
//          {
//             username:$("#form_reg input[name=username]").val(),
//             password:$("#form_reg input[name=password]").val()
//          },
//         function(res){
//             if(res.status!=0){
//                 return layer.msg(res.message);
//             }
//             layer.msg('注册成功，请登录!');
//             // 模拟点击行为
//             $("#link_login").click();
//         })
//     })

//     // 监听登录表单的提交事件
//     $("#form_login").submit(function(e){
//         e.preventDefault();
//         // 快速获取表单中的数据
//         var data = $(this).serialize();
//         $.ajax({
//             method:'POST',
//             url:'/api/login',
//             data:data,
//             success:function(res){
//                 if(res.status!==0){
//                     return layer.msg(res.message);
//                 }
//                 layer.msg('登录成功!');
//                 // 将登录成功得到的token字符串，保存到localStorage
//                 localStorage.setItem('token',res.token);
//                 // 跳转到后台主页
//                 location.href = '/index.html'
//             }
//         })
//     })
// })

$(function(){
    // 点击去注册账号的链接
    $('#link_reg').on('click',function(){
        $('.login-box').hide();
        $('.reg-box').show();
    })
    // 点击去登录账号的链接
    $('#link_login').on('click',function(){
        $('.reg-box').hide();
        $('.login-box').show();
    })

    // 从layui中获取form对象
    var form = layui.form;
    // 通过form.verify()函数自定义校验规则
    // 里面可以使用数组的形式,数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    // 可以是函数的形式:function(value,item){}
    form.verify({
        // 自定义一个pwd校验规则
        pwd:[/[\S]{6,12}$/,'密码必须6到12位,且不能出现空格'],
        // 校验两次密码是否一致的规则
        repwd:function(value,item){
            // 通过形参拿到的是确认密码框的值还需要密码框的值进行比对
            if($('.reg-box input[name=password]').val() !== value){
                return '两次输入的密码不一致';
            }
        }
    })

    // 监听注册表单的提交事件
    $('#form_reg').on('submit',function(e){
        e.preventDefault();
        $.post('http://www.liulongbin.top:3007/api/reguser',{
            username:$('#form_reg input[name=username]').val(),
            password:$('#form_reg input[name=password]').val()
        },function(res){
            if(res.status!=0){
                return console.log(res.message);
            }
            console.log('注册成功!');
        })
    })
})