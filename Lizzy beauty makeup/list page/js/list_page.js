define(function(){
    return{
    	fn:function(){   
    /**************************************************************/
     $(".more-btn").click(function(){
     	$(this).parent().animate({height:"420px"},300);
     	$(this).html("收起")
     	$(this).addClass("clicked")
     })
     $(".more-btn").dblclick(function(){
     	$(this).parent().animate({height:"24px"},300);
     	$(this).html("更多")
     	$(this).removeClass("clicked")
     })
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
		}
    }
  })