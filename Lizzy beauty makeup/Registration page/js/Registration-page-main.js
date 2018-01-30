//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"public" : "public",
		"index" : "Registration_page",
		"register" : "register"
		
		
	}
})
require(["jquery","cookie","index","public","register"],function($,cookie,index,public,register){
	//代码
	$(function(){
		public.fn();
		index.fn();
		register.fn();
	   
	})

})