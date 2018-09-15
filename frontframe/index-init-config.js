
require(["jquery","route","template", "util/storage","util/httpPrompt","placeholder","bootstrap","es5shim","html5shiv","json3"],function($,Route,template,storage,_http_error_statues){
	var container = $("#commonBus"),
		$header = $("#header")

//配置路由
	var routePathMap = {
		'#/demo':{'path':'demo/'},
		'#/index':{'path':'index/'},
		'#/home':{'path':'home/'},
		'#/user/search' : {'path':'user/search',"slashParam":true},//如果需要传参数，slashParam=true
		'#/user' : {'path':'user/',"direction":'right'},//自定义显示的容器
	};

	var routeDic = createRouteDic(routePathMap, routeHandler);
	Router(routeDic).configure({notfound : redirectToNotFoundPage}).init();
	if(window.location.hash){
		;
	}else{
		window.location.hash = "#/index";
	}
	function routeHandler(param){
		var urlInfo = getUrlInfoFromRoutePathMap(param);
		var fixedUrlPart = urlInfo.url,
			filePath = urlInfo.path,
			direction = urlInfo.direction,
			initFlag = urlInfo.init;
		var head = filePath.split('/')[0];
	    
	    //移除container身上所有代理事件
	    container.off();	   		    
	    //调用empty清楚container内元素，empty方法先移除子元素的数据和事件处理函数，然后移除子元素。防止内存溢出
	    container.empty();
	    
		$.ajax({
			url:"frontframe/modules/" + filePath + "/index.html",
			contentType:"text/html",
			success:function(page){
				if(direction && direction == 'right'){
					$("#rightContainer").html(page)
				}else{
					container.html(page);
				}
				require(["modules/" + filePath + "/index"],function(index){	
					if(direction && direction == 'right'){
						index($("#rightContainer"), param);
					}else{
						index(container, param);
					}
					$('input[placeholder], textarea[placeholder]').placeholder();
				});
			},
			error: redirectToNotFoundPage
		});
	};

	//生成Router的路由表
	function createRouteDic(routePathMap, routeHandler){
		var routeDic = {},
			url = null;
		for(key in routePathMap){
			url = key.substr(1);
			if(routePathMap[key].slashParam){
				routeDic[url] = {
						'/(.*)':routeHandler
				};
			}else{
				routeDic[url] = routeHandler;
			}
		}
		return routeDic;
	}

	//从routePathMap中找到当前路由所属条目
	function getUrlInfoFromRoutePathMap(param){
		var currentHash = window.location.hash;
		var currentFixedUrlPart = currentHash;
		if(!!param){
			var currentFixedUrlEndIndex = currentHash.indexOf(param) - 1;
			currentFixedUrlPart = currentHash.slice(0,currentFixedUrlEndIndex);
		}
		if(routePathMap[currentFixedUrlPart]){
			return {'url': currentFixedUrlPart, 'path': routePathMap[currentFixedUrlPart].path, 'direction':routePathMap[currentFixedUrlPart].direction};
		}
		return {};
	};

	

	function redirectToNotFoundPage(){
		if(window.location.hash === null){
			window.location.hash = "#/index";
			return;
		}
		$.ajax({
			url:"frontframe/modules/error/error404.html",
			contentType:"text/html",
			success: function(template){
				container.html(template);
			}
		});
	}
});
