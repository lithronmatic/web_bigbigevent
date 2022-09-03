// 在调用$.get()或$.post()或$.ajax()之前，都会先调用
// $.ajaxPrefilter这个函数
$.ajaxPrefilter(function(options){
    // console.log(options.url);// 
    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = "http://www.liulongbin.top:3007" + options.url;

    // 统一为有权限的接口设置headers请求头
    if(options.url.indexOf('/my/')!== -1){
        options.headers = {
            Authorization:localStorage.getItem('token') || ""
        }
    }

    // 全局统一挂载complete回调函数
    options.complete = function(res){
        // 在complete回调函数中，可以使用res.responseJSON拿到服务器响应回来的数据
        if(res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！"){
            // 1.强制清空token
            localStorage.removeItem('token')
            // 2.强制跳转到login.html
            location.href = "./login.html"
        }
    } //如果每次访问有权限的接口都要写一遍很麻烦 可以封装到baseAPI里去
})