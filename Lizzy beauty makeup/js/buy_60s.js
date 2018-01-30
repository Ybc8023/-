define(function(){
    return{
    	fn:function(){  	
				var oBox = document.getElementById("buy60s_silde");
				let btnL = document.getElementById("buy60s_prve");
				let btnR = document.getElementById("buy60s_next");
				var speed = 1200;
				//oBox.innerHTML += oBox.innerHTML ;
				//初始化ul的宽度	
			function move(){
					if(oBox.offsetLeft < -oBox.offsetWidth/4){
						oBox.style.left = 0
					}else if(oBox.offsetLeft > 0){
						oBox.style.left = -oBox.offsetWidth/3 + "px"	
					}
					if(oBox.offsetLeft == 1200){
						oBox.style.left = 0
					}
					oBox.style.left =  oBox.offsetLeft + speed + "px"
				}
				btnL.onclick = function(){
					speed = -1200;
					move();
				}
				btnR.onclick = function(){
					speed = 1200;
					move();
				}
				
				
			
		
    		
    		
    		
    		
    		
    	}
    }
  })