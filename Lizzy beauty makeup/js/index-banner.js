define(function(){
    return{
    	fn:function(){
    		//获取遮罩
		let Mark = document.getElementById("index-slide");
		//获取左右按钮
		let btnL = document.getElementById("slide_prev");
		let btnR = document.getElementById("slide_next");
		//获取所有的大图
		let bigPic = document.getElementById("index-slide").getElementsByTagName("li");
		//获取所有的小图
		let smallPic = document.getElementById("triggers").getElementsByTagName("a");
		//获取小图所在的ul
		let smallUl = document.getElementById("triggers");
		//获取大盒子
		
//		//设置小图ul的宽度
//		smallUl.style.width = smallPic[0].offsetWidth * smallPic.length + "px";
		let nowPic = 0; //记录当前显示图片的下标
		let zIndex = 1; //记录层级
		var timer = null;
		init(); //点击轮播
		aotoPlay(); //自动轮播
		//给左按钮添加点击事件,从最大到最小,大图
		btnL.onclick = function(){
			
			nowPic --;
			//console.log(nowPic);
			if(nowPic < 0){
				nowPic = smallPic.length - 1;
			}
			init();
			//console.log(nowPic);
		}
		//给右按钮添加点击事件,从小到大,大图.
		btnR.onclick = function(){
			nowPic ++;
			if(nowPic > smallPic.length - 1){
				nowPic = 0;
			}
			init();
			//console.log(nowPic);
		}
		//给所有小图添加事件
		for(var i = 0;i < smallPic.length;i ++){
			//记录每一个小图的下标
			smallPic[i].index = i;
			//给每一个小图添加移入事件
			smallPic[i].onmouseover = function(){
				sport(this,{opacity : 100});
	
			}
			//给每一个小图添加移出事件
			smallPic[i].onmouseout = function(){
				if(this.index != nowPic){
					sport(this,{opacity : 50});
				}
			}
			//给每一个小图添加点击事件,控制大图的显示
			smallPic[i].onclick = function(){
				nowPic = this.index;
				init();
			}
		}
		//封装一个函数，让图片轮播起来
		function init(){
			//控制大图轮播
			bigPic[nowPic].style["z-index"] = ++ zIndex;
			//小图轮播
			if(nowPic == 0){
				sport(smallUl,{left : 0});
			}else if(nowPic == smallPic.length - 1){
				sport(smallUl,{left : -(smallPic[0].offsetWidth) * (smallPic.length - 3)});
			}else{
				sport(smallUl,{left : -(nowPic - 1) * smallPic[0].offsetWidth});
			}
			//初始化小图的透明度
			for(let i = 0;i < smallPic.length;i ++){
				sport(smallPic[i],{opacity : 50});
			}
			//当前图片不透明
			sport(smallPic[nowPic],{opacity : 100});
		}
		//加计时自动轮播
		function aotoPlay(){
			timer = setInterval(function(){
				nowPic ++;
				if(nowPic > smallPic.length - 1){
					nowPic = 0;//达到最大下标时从0开始
				}
				init();
			},3000)
			//console.log(timer);
		}
		//给大盒子添加移入移出事件
		let oBox = document.getElementById("index-slide");	
	oBox.onmouseover = function(){
			clearInterval(timer);//停止自动计时
			//console.log(timer);
		}
		oBox.onmouseout = function(){
			aotoPlay();//重新开始
		}
    	//
    	function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}
    	//
function sport(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		let stop = true;
		for(let attr in json){
			let cur = 0;
			if(attr == "opacity"){
				cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			let speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur != json[attr]){
				stop = false;
			}
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		if(stop){
			clearInterval(obj.timer);
			if(typeof fn == "function"){
				fn();
			}
		}
	},30);
}
		
    		
    		
    		
    		
    		
    	}
    }
  })