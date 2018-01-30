define(function(){
    return{
    	fn:function(){  

$(function(){
	//给注册按钮加事件
	$(".btn").click(function(){
		//获取用户名和密码
		var usn = $("#username").val();
		var pwd = $("#password").val();
		var con = $("#conPwd").val(); //确认密码
		
		//用户不能为空
		if(!usn){
			$(".error_box:eq(0) em").html("用户名不能为空！");
			return;
		}
		
		//检测密码是否相同
		//密码不能为空，密码规则
		if(pwd !== con){
			$(".error_box:eq(1) em").html("两次输入的密码不相同，请重试!");
			return;
		}
		
		//检测一下用户是否已经存在
		//假设："test1,123:test2,abc:test3,888"
		/*转为对象
		 * {
		 * 	test1:123,
		 *  test2:abc,
		 *  test3:888
		 * }
		 */
		
		//获取cookie中的用户信息
		var users = $.cookie("lzUsers") ? $.cookie("lzUsers") : "";
		
		//将字符串转为对象
		users = convertStrToObj(users);
		if(usn in users){ //判断usn属性是否在users对象中。
			alert("用户名已经被注册");
			return;
		}else{
			//注册成功，设置用户信息的cookie
			//test1 123  test2 abc  test3 888
			//"test1,123:test2,abc:test3,888"设置cookie的value值
			//registerUsers 设置cookie的name(key)值
			//将用户添加到已注册用户列表对象中
			users[usn] = pwd;
			//假设users[李涛] = 123
			
			
			//将用户信息对象转化回字符串，以便于设置cookie
			userStr = convertObjToStr(users);
			//设置用户信息cookie
			$.cookie("lzUsers",userStr,{expires:7,path:"/"});
			console.log(decodeURIComponent(document.cookie))
			alert("注册成功！");
			//console.log($.cookie())
			location.href = "../login page/login page.html";
			
		}
	});
	
	//给增登录按钮添加点击事件
//	$("#goLogin").click(function(){
//		//转到登录页面
//		location.href = "login.html";
//	});
})
//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	//假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var users = str.split(":"); //将字符串转为数组 ["test1,123","test2,abc","test3,888"]
	var obj = {};
	/*
	 * var obj = new Object();
	 * obj["name"] = "zhangsan";
	 * 
	 */
	//遍历数组
	for(var i = 0; i < users.length; i ++){
		//将字符串转为数组
		var userData = users[i].split(",");
		//["test1",123] ["test2","abc"] ["test3",888]
		obj[userData[0]] = userData[1];
		/*转为对象如下：
		 * obj = {
		 * 	test1 : 123,
		 *  test2 : abc,
		 *  test3 : 888
		 * }
		 */
	}
	return obj;
}

//将对象转为字符串
function convertObjToStr(obj){
	////假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			//看是否是第一组用户名和密码，如果不是，先在前面添加一个：
			str += ":";
		}
		str += usn + ',' + pwd;
	}
	return str;
}


    	}
    }
})