require.config( {
	baseUrl: "./frontframe",
	paths: {
		//公共路径开始
        ui: "../frontframe/ui",
		util: "../frontframe/util",
		modules: "../frontframe/modules",
		common: "../frontframe/common",
		service:"../frontframe/service",
		indexInit:"../frontframe/index-init-config",
//		bower_components:"../bower_components",
	    //公共路径结束
		//公共JS开始
		bootstrap:"../frontframe/lib/bootstrap.min",
		dateutil:"../frontframe/lib/dateutil",//公用日期工具
		route:"../frontframe/lib/director",//公用路由。。去掉以前内个自己写的路由
		jquery:"../frontframe/lib/jquery.min",//jquery 
		es5shim:"../frontframe/lib/es5-shim.min",//兼容IE8的一些ECMASCRIPT5的一些方法
		html5shiv:"../frontframe/lib/html5shiv.min",//兼容HTML5的一些语法
		json3:"../frontframe/lib/json3.min",
		bs_pagination:"../frontframe/lib/jquery.bs_pagination",
		webuploader:"../frontframe/lib/webuploader/webuploader.min",
		webuploader2:"../frontframe/lib/webuploader2/webuploader",
		template:"../frontframe/lib/template",
		"datatables.net":"../frontframe/lib/jquery.dataTables.min",
        "dataTables.bootstrap.min":"../frontframe/lib/dataTables.bootstrap.min",
		dialog:"../frontframe/lib/dialog-plus",
		easyResponsiveTabs: "../frontframe/lib/easyResponsiveTabs",
		kandytabs:"../frontframe/lib/kandytabs.pack",
		icheck: "../frontframe/lib/icheck",
		wdatePicker:"../frontframe/lib/My97DatePicker/WdatePicker",
		popover:"../frontframe/lib/popover",
		qrcode:"../frontframe/lib/qrcode",
		jqueryTextChange:"../frontframe/lib/jquery.splendid.textchange",
		placeholder: "../frontframe/lib/jquery.placeholder.min"
	},
	shim: {
	      bootstrap: {
	      	deps: ["jquery"]
	      },
	      bs_pagination: {
	      	deps: ["jquery"]
	      },
	      webuploader: {
	      	deps: ["jquery"]
	      },
	      "datatables.net": {
	      	deps: ["jquery"]
	      },
	      "dataTables.bootstrap.min": {
	      	deps: ["jquery", "datatables.net"]
	      },
	      dialog: {
	      	deps: ["jquery"]
	      },
	      icheck: {
	      	deps: ["jquery"]
	      },
	      easyResponsiveTabs :{
	      	deps: ["jquery"]
	      },
		  jqueryTextChange:{
			deps: ["jquery"]
		  },
		  placeholder:{
			deps: ["jquery"]
		  }

    },

	waitSeconds: 15//加载时间为15秒。。。。15秒还加载不到。。可以放弃了
} );