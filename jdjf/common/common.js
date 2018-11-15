var SERVER_PATH = "http://test.www.bjdai.com.cn";
/**
 * 调用后台服务器的ajax，Post方式，返回json类型，utf-8格式
 *
 * @author cuijk
 * @param url
 *            后台服务的地址
 * @param param
 *            往后台传的参数
 * @param success
 *            成功后的回调函数
 * @param error
 *            失败后的回调函数
 *
 */
function ajaxPost(url, param, success, error) {

    jQuery.ajax({
        url: SERVER_PATH + url,
        type: 'POST',
        timeout: 60000, // 超时时间设置，单位毫秒
        data: JSON.stringify(param),
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("sign", localStorage.getItem("sign"));
        },
        success: eval(function (data) {
            success(data);
        }),
        error: eval(function (data) {
            error(data);
        })
    });
}
