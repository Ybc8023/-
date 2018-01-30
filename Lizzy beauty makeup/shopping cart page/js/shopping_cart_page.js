define(function(){
    return{
    	fn:function(){   
    /**************************************************************/
//$(".checkbox").click(function(){
//	$(this).toggleClass("ischecked")
//})
$(".checked_all,.checkbox").click(function(){
	$(".checkbox").toggleClass("ischecked")
	$(".topay").toggleClass("topay_ok")
})
$("#checked_del").click(function(){
	$(this).parents("#page").remove()
	$(".blank").css("display","block")
	
})
/***************************************************************/
























    	}
    }
})