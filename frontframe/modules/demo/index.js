define(["jquery"], function($){
	return function(container,param){
		$("#search").click(function(){
			var user_name = $("#name").val();
			$.ajax({
				type:"GET",
				url:"demo/search",
				data:{name:user_name},
				dataType:"json",
				success:function(data){
					console.log(data);
					//可以使用artTemplate,也可以使用jquery直接写dom
//					container.append();
				}
			});
		});
	}
});