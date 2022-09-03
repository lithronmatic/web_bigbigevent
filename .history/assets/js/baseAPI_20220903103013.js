// 在调用$.get()或$.post()或$.ajax()之前，都会先调用
// $.ajaxPrefilter这个函数
$.ajaxPrefilter(function(options){
    // console.log(options.url);// 
    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = "http://www.liulongbin.top:3007" + options.url;

    // 统一为有权限的接口设置headers请求头
    if(options.url.indexof('/my/')!== -1){
        options.headers = {
            Authorization:localStorage.getItem('token') || ""
        }
    }
})