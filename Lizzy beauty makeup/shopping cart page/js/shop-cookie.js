define(function(){
    return{
    	fn:function(){   
    /**************************************************************/
   $(function() {
				//取出在cookie中存的购物车信息
				var lzStr = $.cookie("lz") ? $.cookie("lz") : "";

				if(!lzStr) {
					$(".blank").css({
						display: "block"
					});
				} else {
					var lzObj = convertlzStrToObj(lzStr);
					//遍历所有的商品生成html添加到购物车列表中去
					for(var id in lzObj) {
						//商品信息对象
						var good = lzObj[id];
						var str = "aa";
						//将上面的结构添加到lzList中去
						$(str).appendTo(".item_body");
					}
					//给每个商品添加从购物车删除的事件
					$("#checked_del").click(function() {
						//在页面上将商品信息删除，顺便获取一个该商品的id
						var id = $(".item_content").remove().attr("data-good-id");
						//从cookie中将该商品删除
						var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
						var lzObj = convertlzStrToObj(lzStr);

						delete lzObj[id];
						
//	$(this).parents("#page").remove()
	$(".blank").css("display","block")
	

						//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
						/* {
					 * 	sp1 : {
					 * 		name : "香蕉",
						 * price : 30,
						 * num : 1,
						 * src : "img/1.jpg"
					 * }					 * 
					 * }
					 */
						//将新商品信息放回cookie
						$.cookie('lz', convertObjTolzStr(lzObj), {
							expires: 7,
							path: "/"
						});
					})
					//给增加按钮添加事件
					$(".add").click(function() {
						//console.log($.cookie())
					var id = $(".item_content").attr("data-good-id");

						var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
						var lzObj = convertlzStrToObj(lzStr);
						lzObj[id].num += 1;
						//将页面上显示的数量加1
						$(".num_val").val("" + lzObj[id].num);
						//更新页面上的小计
							$(".price_sum").html(lzObj[id].num * lzObj[id].price + "");
						//将信息放回cookie
						$.cookie('lz', convertObjTolzStr(lzObj), {
							expires: 7,
							path: "/"
						});
					});
					//给减按钮添加点击事件
					$(".minus").click(function(){
						//console.log($.cookie())
						var id = $(".item_content").attr("data-good-id");
						var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
						var lzObj = convertlzStrToObj(lzStr);
						if(lzObj[id].num > 1){ //商品数量减少不能少于1
							lzObj[id].num -= 1;
							//将页面上显示的数量减1
							$(".num_val").val("" + lzObj[id].num);
							//更新页面上的小计
							$(".price_sum").html(lzObj[id].num * lzObj[id].price + "");
							//将信息放回cookie
							$.cookie('lz', convertObjTolzStr(lzObj), {
								expires: 7,
								path: "/"
							});
						}
						
						
					});
					
					//改数量的input绑定一个blur事件
					$(".num_val").blur(function(){
						var id = $(".item_content").attr("data-good-id");
						var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
						var lzObj = convertlzStrToObj(lzStr);
						//判断用户输入是否合法
						var pattern = /^\d+$/;
						if(!pattern.test($(this).val())){
							lzObj[id].num = 1;
							$(this).val("1");
						}else{
							//修改一下数量
						lzObj[id].num = parseInt($(this).val());
						}
						
						
							$(this).siblings("input").val("" + lzObj[id].num);
							//更新页面上的小计
							$(".price_sum").html(lzObj[id].num * lzObj[id].price + "");
							//将信息放回cookie
							$.cookie('lz', convertObjTolzStr(lzObj), {
								expires: 7,
								path: "/"
							});
					})
					
			}

			});

			function convertlzStrToObj(lzStr) {
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!lzStr) {
					return {};
				}
				var goods = lzStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i++) {
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name: data[1],
						price: parseFloat(data[2]),
						num: parseInt(data[3]),
						src: data[4]
					}
				}
				return obj;
			}

			function convertObjTolzStr(obj) {
				/* {
				 * 	sp1 : {
				 * 		name : "香蕉",
				 * price : 30,
				 * num : 1,
				 * src : "img/1.jpg"
				 * },
				 * sp2 :{
				 * 	name :"苹果",
				 * price : 40,
				 * num:2,
				 * src : "img/2.jpg"
				 * },
				 * sp3{
				 * 	name : "梨"，
				 * price : 50,
				 * num : 3,
				 * src : "img/3.jpg"
				 * }
				 * }
				 */
				var lzStr = "";
				for(var id in obj) {
					if(lzStr) {
						lzStr += ":";
					}
					lzStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
				}
				return lzStr;
			}





















    	}
    }
})