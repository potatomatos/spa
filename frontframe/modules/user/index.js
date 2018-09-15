define(["jquery","template"], function($,template){
	return function(container,param){
		
			$("#add_user").click(function(){//跳转到添加页面
				window.location.hash = "#/user/add";
			});
			
			$.ajax({//获取用户列表
				type:"GET",
				url:"user/showUser",
				dataType:"json",
				success:function(data){
					console.log(data);
					var html=template("user_list",data);
					$("#content").html(html);
					
					$("#search_user").click(function(){//TODO 搜索用户
						alert("点击了搜索");
					});
					
					$("#edit_user").click(function(){// TODO 编辑用户
						alert("点击了编辑");
					});
					
					$("#delete_user").click(function(){//TODO 删除用户
						alert("点击了删除");
					});
				}
			});
			
			
			

			
	
	}
});