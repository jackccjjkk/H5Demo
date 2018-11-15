$(document).ready(function () {
    $("#login").on("click", function () {
        doLogin();
    });
    function doLogin() {
        var url = "/user/loginUsePwd.php"; //接口地址
        var params = {
            "phone": $("#phone").val(),
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