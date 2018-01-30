define(function(){
    return{
    	fn:function(){ 
    		/*header*/
$(".zhu a,.guan").hover(function(){
	$(".zhu a span").css({"transform":"rotateZ(180deg)"});
	$(".guan").css({"opacity":"1","color":"red","display":"block"});
},
function(){
	$(".zhu a span").css({"transform":"rotateZ(0deg)"});
	$(".guan").css({"opacity":"0","display":"none"});
})
			/*resou*/
$(".resou a").hover(function(){
	$(this).css({"color":"#e7737e","text-decoration":"underline"});
	
},
function(){
	$(".resou a:nth-of-type(odd)").css({"color":"#e7737e","text-decoration":"none"});
	$(".resou a:nth-of-type(even)").css({"color":"#000","text-decoration":"none"});
})
			/*nav*/
$("nav ul:eq(0) li a").hover(function(){
	$(this).css({"background":"#2f4052"});
	$("nav ul:eq(0) li a:eq(0)").css({"background":"#ff666b"});
},function(){
	$(this).css({"background":"#34495e"});
	$("nav ul:eq(0) li a:eq(0)").css({"background":"#ff666b"});
})
			/*fenlei 显示/消失*/
$("nav ul:eq(0) li a:eq(0),.fenlei").hover(function(){
	$(".fenlei").addClass("fenlei1")
},
function(){
	$(".fenlei").removeClass("fenlei1")	
})
			/*fenlei*/
$(".fenlei").find(".fen11,.fen12,.fen21,.fen22,.fen23").hover(function(){
	$(this).css({"background":"#eee"})
},
function(){
	$(this).css({"background":"#fff"})
})
$(".fen11,.fen12,.fen21,.fen22,.fen23").find("a").hover(function(){
	$(this).css({"color":"#ff666b","text-decoration":"underline"})
},
function(){
	$(this).css({"color":"#a295b2","text-decoration":"none"})
})
  //footer
$(".ft_nav a").hover(function(){
	$(this).css({"text-decoration":"underline"})
},function(){
	$(this).css({"text-decoration":"none"})
})
$(".ft_txt a").hover(function(){
	$(this).css({"text-decoration":"underline"})
},function(){
	$(this).css({"text-decoration":"none"})
})  		
    //右侧栏
$(".sb_btm li ").hover(function(){
	$(this).find(".tip").css({"visibility":"visible","right":"34px","opacity":"1"})
	$(this).css("background","#ff666b")
},function(){
	$(this).find(".tip").css({"visibility":"visible","right":"46px","opacity":"0"})
	$(this).css("background","0")
})
$(".back2top").click(function(){
	$("html").animate({"scrollTop":0},1000)
			})		
    		
    		
    	}
    }
  })