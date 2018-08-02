/**
 * 封装Ajax
 * @param {Object} options
 * options={
 * 	url:"a.php",  //url--->地址
 *  type:"POST",  //type--->请求方式
 *  async:true,   //异步==>true   同步==>false
 *  data:{},      //发送到服务器的数据
 *  success:function(data){}//成功时执行的回调函数
 *  error:function(data){}//失败时执行的回调函数
 * }
 */
function ajax(options) {

	var xhr = null;
	var params = formsParams(options.data);
	//1>创建对象
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Mincrosoft.XMLHTTP");
	}

	//2>open链接

	if(options.type == "GET") {
		xhr.open(options.type, options.url + "?" + params, options.async);
		xhr.send(null);
	} else if(options.type == "POST") {
		xhr.open(options.type, options.url, options.async);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
	
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			options.success(xhr.responseText);
		}else{
			options.error(xhr.responseText);
		}
	};
	
	/**
	 * 处理参数格式
	 * @param {Object} data
	 */
	function formsParams(data) {
		var arr = [];
		for(var i in data) {
			arr.push(i + "=" + data[i]);
		}
		return arr.join("&");
	}
}
