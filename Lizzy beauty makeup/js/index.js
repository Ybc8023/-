define(function(){
    return{
    	fn:function(){   		
/**************轮播图片动态获取*****************/    	  		
$.getJSON("index.json",function(response){
var str = "";
$(response).each(function(index,value){
str += '<img src="'+ value[1] +'" alt="" style="  z-index: 5;transition-property: none; transition-duration: 500ms; transition-timing-function: ease;"/>';
		//console.log(str);
		$(".banner_1").append(str);	
		})
})
/*******************************/
$.getJSON("index.json",function(response){
//console.log(response);
var str = "";
$(response).each(function(index,value){
	//str += "<h1>" + value.name + "</h1>";	
str += '<img src="'+ value[2] +'" alt="" style=" transition-property: none; transition-duration: 500ms; transition-timing-function: ease;"/>';
		//console.log(str);
		$(".banner_2").append(str);	
		})
})
/*******************************/
$.getJSON("index.json",function(response){
//console.log(response);
var str = "";
$(response).each(function(index,value){
	//str += "<h1>" + value.name + "</h1>";	
str += '<img src="'+ value[3] +'" alt="" style="  transition-property: none; transition-duration: 500ms; transition-timing-function: ease;"/>';
		//console.log(str);
		$(".banner_3").append(str);	
		})
})
/*******************************/
$.getJSON("index.json",function(response){
//console.log(response);
var str = "";
$(response).each(function(index,value){
	//str += "<h1>" + value.name + "</h1>";	
str += '<img src="'+ value[4] +'" alt="" style="   transition-property: none; transition-duration: 500ms; transition-timing-function: ease;"/>';
		//console.log(str);
		$(".banner_4").append(str);	
		})
})
/*******************************/
$.getJSON("index.json",function(response){
//console.log(response);
var str = "";
$(response).each(function(index,value){
	//str += "<h1>" + value.name + "</h1>";	
str += '<img src="'+ value[5] +'" alt="" style=" transition-property: none; transition-duration: 500ms; transition-timing-function: ease;"/>';
		//console.log(str);
		$(".banner_5").append(str);	
		})
})    /*************************************************************************/		
//buy60s
$(".buy60s_list").hover(function(){
	$(".buy60s_prve").css({"opacity": 1})
	$(".buy60s_next").css({"opacity": 1})
	}
,function(){
	$(".buy60s_prve").css({"opacity": 0})
	$(".buy60s_next").css({"opacity": 0})
}) 
/*************************************************************************/	
//热门活动
$(".cle li").hover(function(){
	$(this).css({"box-shadow":"1px 4px 10px #000"})
},function(){
	$(this).css({"box-shadow":"0px 0px 0px #fff"})
})
/*************************************************************************/	
//人气爆款
$(".hot_items li").hover(function(){
	$(this).find("img").css({"transform":"scale(0.9)"})
	$(this).find(".btn_fr").css({"right":"-6px",})
	$(this).find("a:eq(1)").css({"color":"#ff666b","text-decoration":"underline"});
},
function(){
	$(this).find("img").css({"transform": "scale(1)"})
	$(this).find(".btn_fr").css({"right":"-120px"})
	$(this).find("a:eq(1)").css({"color":"#000","text-decoration":"none"});
})
/*************************************************************************/	
//品牌大全
$(".pic a img").hover(function(){
	$(this).css({"transform":"scale(1.1)"})
},function(){
	$(this).css({"transform":"scale(1)"})
})
$(".list li a img").hover(function(){
	$(this).css({"transform":"translateY(-5px)"})
},function(){
	$(this).css({"transform":"translateY(0)"})
})
/*************************************************************************/	
//footer
$(".footer_search_hot a").hover(function(){
	$(this).css({"color":"#ff666b","text-decoration":"underline"});
	
},
function(){
	$(".footer_search_hot a:nth-of-type(odd)").css({"color":"#ff666b","text-decoration":"none"});
	$(".footer_search_hot a:nth-of-type(even)").css({"color":"#666","text-decoration":"none"});
})
/*************************************************************************/	
/*左侧栏*/
$(window).scroll(function(){
	//console.log($(this).scrollTop())
	if($(this).scrollTop() >= 1000){
		$(".floor_nav").css({"visibility":"visible","opacity":"1"})}
if($(this).scrollTop() < 1000 || $(this).scrollTop() >=13900){
	$(".floor_nav").css({"visibility":"hidden","opacity":"0"})}
if($(this).scrollTop() >= 1200 && $(this).scrollTop() <= 3300){
	$(".floor_nav li:eq(1)").css("background","#ff666b")
}else{
	$(".floor_nav li:eq(1)").css("background","0")
	$(".floor_nav li:eq(2)").css("background","0")
	$(".floor_nav li:eq(3)").css("background","0")
}
if($(this).scrollTop() >= 3300 && $(this).scrollTop() <= 4260){
	$(".floor_nav li:eq(2)").css("background","#ff666b")
	$(".floor_nav li:eq(1)").css("background","0")
}else{
	
	$(".floor_nav li:eq(2)").css("background","0")
	$(".floor_nav li:eq(3)").css("background","0")
}
if($(this).scrollTop() >= 4260){
	$(".floor_nav li:eq(3)").css("background","#ff666b")
	$(".floor_nav li:eq(2)").css("background","0")
}
})
/*************************************************************************/	
$(".floor_nav li ").hover(function(){
	$(this).css("background","#ff666b")
},function(){
	$(this).css("background","0")
})
$(".no1").click(function(){
	$("html").animate({"scrollTop":600},500)
})
$(".no2").click(function(){
	$("html").animate({"scrollTop":1100},500)
})
$(".no3").click(function(){
	$("html").animate({"scrollTop":3200},500)
})
  $(".no4").click(function(){
	$("html").animate({"scrollTop":4160},500)
})  	
/*************************************************************************/	










    	}
    }
    
})