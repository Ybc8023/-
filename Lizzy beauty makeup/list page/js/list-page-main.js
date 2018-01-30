//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"public" : "public",
		"index" : "list_page",
		"index_cookie" : "index_cookie"
		
		
	}
})
require(["jquery","cookie","index","public","index_cookie"],function($,cookie,index,public,index_cookie){
	//代码
	$(function(){
		public.fn();
		index.fn();
	   index_cookie.fn();
	})

})