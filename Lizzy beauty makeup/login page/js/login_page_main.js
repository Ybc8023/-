//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"public" : "public",
//		"index" : "login_page",
		"login" : "login_cookie"
		
		
	}
})
require(["jquery","cookie","public","login"],function($,cookie,public,login){
	//代码
	$(function(){
		login.fn();
		public.fn();
	
	    
	})

})