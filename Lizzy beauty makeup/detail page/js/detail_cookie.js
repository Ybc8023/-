define(function(){
    return{
    	fn:function(){   
    /**************************************************************/
   $(function(){
				//加载已有的购物车信息
				loadlz();
				
				//给购物车按钮加一个点击事件
				$("#buy_btn").click(function(){
					
				//获取商品的id（用来区分不同的商品）
	var goodId = $(".view_bd").attr("data-good-id");
					//获取商品的名称
					var goodName = $(".product_name h1").html();
					//获取商品的价格
					var goodPrice = $("#s_nowprice").html();
					//获取商品的图片src
					var goodSrc = $(".view_bd img").attr("src");
//					document.cookie = "key=value"
					//存到购物车中去，商品信息统一可以放在cookie当中
					//购物车中是否有商品？
					//购物车中是否加过同一个商品？
					//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
					/*设计以下结构的对象来处理商品信息
					 * 以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					 * {
					 * 	sp1 : {
					 * 		name : "香蕉",
					 *      price : 30,
					 *      num : 1,
					 *      src : "img/1.jpg"
					 *  }					
					 * }
					 */
					//获取cookie中的信息
					//如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
					var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
					//将字符串转成对象
					var lzObj = convertlzStrToObj(lzStr);
					//判断该商品是否已经在购物车中存在
					if(goodId in lzObj){
						//如果已存在，那么该商品的数量加1
						lzObj[goodId].num += 1;
					}else{
						//如果不存在，那么将新商品的信息存入
						lzObj[goodId] = {
							name : goodName,
							price : goodPrice,
							num : 1,
							src : goodSrc
						};
					}
					
					//将新的购物车信息存回cookie
					//将对象转为字符串
					lzStr = convertObjTolzStr(lzObj);
					//存入cookie
					//document.cookie = "key=value"
					$.cookie("lz",lzStr,{expires : 7,path:"/"});
				})	
				
				//给增加按钮添加事件
					$(".add").click(function() {
						//console.log($.cookie())
					var id = $(".view_bd").attr("data-good-id");

						var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
						var lzObj = convertlzStrToObj(lzStr);
						lzObj[id].num += 1;
						//将页面上显示的数量加1
						$(".skunum input").val("" + lzObj[id].num);
						//将页面上显示的数量加1
						$("#sidebar_cartnum").html("" + lzObj[id].num);
						//将信息放回cookie
						$.cookie('lz', convertObjTolzStr(lzObj), {
							expires: 7,
							path: "/"
						});
					});
					//给减按钮添加点击事件
					$(".minus").click(function(){
						//console.log("aaa")
						var id = $(".view_bd").attr("data-good-id");
						var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
						var lzObj = convertlzStrToObj(lzStr);
						if(lzObj[id].num > 1){ //商品数量减少不能少于1
							lzObj[id].num -= 1;
							//将页面上显示的数量减1
							$(".skunum input").val("" + lzObj[id].num);
							//将页面上显示的数量加1
						$("#sidebar_cartnum").html("" + lzObj[id].num);
							//将信息放回cookie
							$.cookie('lz', convertObjTolzStr(lzObj), {
								expires: 7,
								path: "/"
							});
						}
						
						
					});
			});
			
			
			function convertlzStrToObj(lzStr){
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!lzStr){
					return {};
				}
				var goods = lzStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						num : parseInt(data[3]),
						src : data[4]
					}
				}
				return obj;
			}
			function convertObjTolzStr(obj){
					/* {
					 * 	sp1 : {
					 * 		name : "香蕉",
						 * price : 30,
						 * num : 1,
						 * src : "img/1.jpg"
					 * }
					 * }
					 */
					var lzStr = "";
					//遍历对象
					for(var id in obj){
						if(lzStr){
							lzStr += ":";
						}
						//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
						lzStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
					}
					return lzStr;
			}
			
			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadlz(){
				var lzStr = $.cookie("lz") ? $.cookie("lz") : "";
					var lzObj = convertlzStrToObj(lzStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in lzObj){
						total += lzObj[id].num;
					}
					$("#buy").val("购物车(" + total + ")");
			}
















   	}
    }
})