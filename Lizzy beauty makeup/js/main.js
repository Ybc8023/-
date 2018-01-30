//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"index" : "index",
		"public" : "public",
		"banner" : "index-banner",
		"buy_60" : "buy_60s",
		"index_cookie" : "index_cookie"
	}
})
require(["jquery","cookie","index","banner","buy_60","public","index_cookie"],function($,cookie,index,banner,buy_60,public,index_cookie){
	//代码
	$(function(){
		public.fn();
		index.fn();
	    banner.fn();
		buy_60.fn();
		index_cookie.fn();
	})

})