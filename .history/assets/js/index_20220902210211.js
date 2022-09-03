// $(function(){
//     getUserInfo();
// })

// var layer = layui.layer;
// // 获取用户的基本信息
// function getUserInfo(){
//     $.ajax({
//         method:'GET',
//         url:'/my/userinfo',
//         // headers就是请求头配置对象
//         headers:{
//             Authorization:localStorage.getItem('token') || ""
//         },
//         success:function(res){
//            if(res.status!==0){
//              return layui.layer.msg('获取用户信息失败!');
//            }
//         //调用renderAvatar 渲染用户的头像
//         renderAvatar(res.data);  
//         }
//     })
// }

// // 渲染用户的头像
// function renderAvatar(user){
//     // 1.获取用户名称
//     var name = user.nickname || user.username;
//     // 2.设置欢迎的文本
//     $('#welcome').html('欢迎&nbsp;&nbsp;'+ name);
//     // 3.按需渲染用户的头像
//     if(user.user_pic!==null){
//         // 3.1渲染图片头像
//         $(".layui-nav-img").attr('src',user.user_pic).show();
//         // 让文本头像隐藏
//         $(".text-avatar").hide();
//     }else{
//         // 3.2渲染文本头像
//         // 让图片头像隐藏
//         $(".layui-nav-img").hide();
//         //渲染文本头像
//         var first = name[0].toUpperCase();
//         $(".text-avatar").html(first).show();
//     }
// }

