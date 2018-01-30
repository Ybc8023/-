//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"public" : "public",
		"index" : "detail_page",
		"detail_cookie" : "detail_cookie",
		"index_cookie" : "index_cookie"
		
	}
})
require(["jquery","cookie","index","public","detail_cookie","index_cookie"],function($,cookie,index,public,detail_cookie,index_cookie){
	//代码
	$(function(){
		public.fn();
		index.fn();
	   detail_cookie.fn();
	   index_cookie.fn();
	})

})