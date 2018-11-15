$(document).ready(function () {
    $("#login").on("click", function () {
        doLogin();
    });
    function doLogin() {
        var url = "login.do"; //接口地址
        var params = {
            "userName": $("#userName").val(),
            "password": $("#password").val()
        };
        var success = function (result) {
            console.log(result);
        };
        var error = function (result) {
            console.log(result);
        };
        ajaxPost(url, params, success, error);
    }

});