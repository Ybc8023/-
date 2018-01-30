define(function(){
    return{
    	fn:function(){
  $(function(){  		
  //获取cookie 	
	var str = $.cookie("lzLoginUsers") ? $.cookie("lzLoginUsers") : "";
	if(str){
		var obj = convertStrToObj(str);
		//写入当前登录用户账号
		$("#index").html($('<p>欢迎您！' + str + '<a href="javascript:;" id="logout">注销</a></p>'))
	}
	//点击注销按钮之后
	$("#logout").click(function(){
		$(this).parent().remove();
		$.removeCookie("lzLoginUsers",{expires : 7,path:"/"});
		$("#index").html($('<a href="login page/login page.html" id="index" >登录</a>'))
	})	
})
function convertStrToObj(str){
	if(!str){
		return {};
	}
	var users = str.split(":");
	var obj = {};
	for(var i = 0; i < users.length; i ++){
		var data = users[i].split(",");
		obj[data[0]] = data[1];
	}
	return obj;
}
function convertObjToStr(obj){
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			str += ":";
		}
		str += usn + "," + pwd;
	}
	return str;

 	}	














    	}
    }
    
})