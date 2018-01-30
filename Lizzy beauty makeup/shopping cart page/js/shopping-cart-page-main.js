//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"public" : "public",
		"index"  : "shopping_cart_page",
		"shop"   : "shop-cookie",
		"index_cookie":"index_cookie"
		
	}
})
require(["jquery","cookie","index","public","shop","index_cookie"],
function($,cookie,index,public,shop,index_cookie){
	//代码
	$(function(){
		public.fn();
		index.fn();
	   shop.fn();
	   index_cookie.fn();
	})

})