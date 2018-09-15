/**
 * XMLHttpRequest的提示语配置
 */
define(function() {

    

        var http_error_statues = {
        	"web_index_fisthtml" : "index-dev.html",
           	"web_admin_fisthtml" : "admin-dev.html",
        	"web_service_url" : "http://127.0.0.1/",
        	"web_service_name" : "api/",
        	"investor_url" : "http://127.0.0.1:8080/",
        	"investor_web_name" : "pop-online-investor-web/",
        	"investor_web_fisthtml" : "index-dev.html",
        	"qr_code_url" : "https://vote.chinaclear.cn/live/index.html#/login/",
    		"0" : "您当前网络状况不好,请稍后再试!",
    		"400" : "程序请求出现语法错误。",
    		"401" : "程序试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填 写合适的Authorization头后再次发出请求。",
    		"403" : "资源不可用。服务器理解程序的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。",
    		"404" : "网络开小差了~~~请您稍后刷新~~~",
    		"405" : "请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新）",
    		"406" : "指定的资源已经找到，但它的MIME类型和程序在Accpet头中所指定的不兼容（HTTP 1.1新）。",
    		"407" : "类似于401，表示程序必须先经过代理服务器的授权。（HTTP 1.1新）",
    		"408" : "在服务器许可的等待时间内，程序一直没有发出任何请求。程序可以在以后重复同一请求。（HTTP 1.1新）",
    		"409" : "请求和资源的当前状态相冲突，请求不能成功。（HTTP 1.1新）",
    		"410" : "所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而 404表示由于未知的原因文档不可用。（HTTP 1.1新）",
    		"411" : "服务器不能处理请求，除非程序发送一个Content-Length头。（HTTP 1.1新）",
    		"412" : "请求头中指定的一些前提条件失败（HTTP 1.1新）。",
    		"413" : "目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头（HTTP 1.1新）。",
    		"414" : "请求过长（HTTP 1.1新）。",
    		"416" : "服务器不能满足程序在请求中指定的Range头。（HTTP 1.1新）",
    		"500" : "出错了，请您稍后再试~~~",
    		"501" : "出错了，请您稍后再试~~~",
    		"502" : "出错了，请您稍后再试~~~",
    		"503" : "出错了，请您稍后再试~~~",
    		"504" : "出错了，请您稍后再试~~~",
    		"505" : "出错了，请您稍后再试~~~",
    		"serviceurl" : {
    			
    			//1.1.持有人大会查询接口
    			"queryMeeting":"queryMeetingRest/queryMeeting",
    			//1.2.付款信息查询接口
    			"queryPayment":"queryPaymentRest/queryPayment",
    			//1.3.查询机构董监高账户关系接口
    			"queryAgencySpecial":"queryAgencySpecialRest/queryAgencySpecial",
    			//1.4.特殊账户创建接口
    			"createSpecialAccount":"createSpecialAccountRest/createSpecialAccount",
    			//1.5.特殊账户查询接口
    			"querySpecialAccount":"querySpecialAccountRest/querySpecialAccount",
    			//1.6.特殊账户删除接口
    			"removeSpecialAccount":"removeSpecialAccountRest/removeSpecialAccount",
    			//1.7.持有人大会详细信息查询接口
    			"queryMeetingInfo":"queryMeetingInfoRest/queryMeetingInfo",
    			//1.8.持有人大会重置校验接口
    			"checkResetMeeting":"checkResetMeetingRest/checkResetMeeting",
    			//1.9.持有人大会重新编辑接口
    			"reeditMeeting":"reeditMeetingRest/reeditMeeting",
    			//2.0创建持有人大会
    			"createBaseMeeting":"createBaseMeetingRest/createBaseMeeting",
    			//2.1持有人大会修改
    			"modifyBaseMeeting":"modifyBaseMeetingRest/modifyBaseMeeting",
    			//2.2查询证券信息
    			"queryAccountInfo":"queryAccountInfoRest/queryAccountInfo",
    			//2.3证券号码查询证券简称
    			"queryAccountNameById":"queryAccountNameByIdRest/queryAccountNameById",
    			//2.4议案创建
    			"createBillVote":"createBillVoteRest/createBillVote",
    			//2.5查询证券信息
    			"queryAccountInfo":"queryAccountInfoRest/queryAccountInfo",
    			//2.6议案删除
    			"deleteBillVote":"deleteBillVoteRest/deleteBillVote",
    			//2.7持有人大会基本信息重新编辑
    			"modifyBaseMeeting":"modifyBaseMeetingRest/modifyBaseMeeting",
    			//1.10.持有人大会重置接口
    			"resetMeeting":"resetMeetingRest/resetMeeting",
    			//1.11申请人信息查询接口
    			"queryUserInformation":"queryUserInformationRest/queryUserInformation",
    			//1.12申请人信息创建接口
    			"createMeetingInforMation":"createMeetingInforMationRest/createMeetingInforMation",
    			// 股东名册查询
    			"queryShareholderInfo":"queryShareholderInfoRest/queryShareholderInfo",
    			// cpid生成
    			"createCpid":"createCpidServRest/createCpidServ",
    			// 申请人信息修改
    			"modifyMeetingInforMation":"modifyMeetingInforMationRest/modifyMeetingInforMation",
    			// 导出股东名册
    			"uploadShareholderInfo":"uploadShareholderInfoRest/uploadShareholderInfo",
    			// 
    			"createVoteDocument":"createVoteDocumentRest/createVoteDocument",
    			// 大会审核
    			"auditMeetingApply":"auditMeetingApplyRest/auditMeetingApply",
    			// 
    			"removeVoteDocument":"removeVoteDocumentRest/removeVoteDocument",
    			//提交审核
    			"auditSubmitRest":"auditSubmitRest/auditSubmit",
    			//提交审核
    			"changeRelation":"changeRelationRest/changeRelation",
    			// 导出付款公告
    			"downloadWord":"downloadWordRest/downloadWord",    				
    			//投票结果统计查询
    			"countVotingResult" : "countVotingResultRest/countVotingResult",
    			//投票结果Excel导出
    				"exportEXCEL" : "exportEXCELRest/exportEXCEL",
    			//投票结果PDF导出
        		"countVotingResultRestPDFExport" : "exportPDFRest/countVotingResultPDF",
        		//中小投资者统计查询查询
        		"midSmallInvestorsVoteRest" : "midSmallInvestorsVoteRest/midSmallInvestorsVote",
        	
        		//中小投资者统计PDF导出
        		"midSmallInvestorsVoteRestPDFExport" : "exportPDFRest/midSmallInvestorsVotePDF",
        		//分段统计查询
        		"countSegmentationRest" : "countSegmentationRest/countSegmentation",
   
        		//分段统计PDF导出
        		"countSegmentationRestPDFExport" : "exportPDFRest/countSegmentationRestPDF",
        		//议案列表查询
        		"queryBillIdRest" : "queryBillIdRest/queryBillId",
        		//投票详情
        		"voteDetailRest" : "VoteDetailRest/voteDetail",
        		//投票详情EXCEL导出
        		"exportEXCELDeatil" :"exportEXCELRest/exportEXCELDeatil",
        	
        		//冲突账户列表
        		"conflictAccountList" : "conflictAccountListRest/conflictAccountList",
        		//冲突账户详情

        		"conflictAccountDetail" : "conflictAccountDetailRest/conflictAccountDetail",
        			//匿名持有人大会详细信息查询接口
                    "queryMeetingInfoAnonymousRest":"queryMeetingInfoAnonymousRest/queryMeetingInfoAnonymous",
                    //证券账号持有数量查询接口
                    "queryHoldVolume":"queryHoldVolumeRest/queryHoldVolume",
                    //查询我的投票接口
                    "queryMyVote":"queryMyVoteRest/queryMyVote",
                    //实际持有人投票接口
                    "actualHolderVoting":"actualHolderVotingRest/actualHolderVoting",
                    //名义持有人查询证券信息接口
                    "queryHolderAccountInfo":"queryHolderAccountInfoRest/queryHolderAccountInfo",
                    //确定名义持有人投票接口
                    "determineNominalHolderVotingRest":"determineNominalHolderVotingRest/determineNominalHolderVoting",
                    //非确定名义持有人投票接口
                    "uncertainUserVoting":"uncertainUserVotingRest/uncertainUserVoting",
                     //关联数绑定量查询
                    "countRelatedAccount":"CountRelatedAccountRest/CountRelatedAccount",
                    //实际持有人投票结果接口
                    "actualHolderVotingResult":"actualHolderVotingResultRest/actualHolderVotingResult",
                    //查询确定名义持有人投票接口
                    "queryDetterNomHolderVoting":"queryDetterNomHolderVotingReRest/queryDetterNomHolderVotingRe",
                    //确定名义持有人投票列表接口
                    "deterNomHolderVotingList":"deterNomHolderVotingListRest/deterNomHolderVotingList",
                    //非确定名义持有人投票结果接口
                    "queryUncertainUserVotingRest":"queryUncertainUserVotingRest/queryUncertainUserVoting",
					//下载确定名义持有人EXCEL模板
					"downloadExcelDetermine":"downloadExcelDetermineRest/downloadExcelDetermine",
					//上传确定名义持有人EXCEL投票数据
					"parseExcelDetermine":"parseExcelDetermineRest/parseExcelDetermine",
					//确定名义持有人提交Excel投票接口
					"excelDetNomHolderVote":"excelDetNomHolderVoteRest/excelDetNomHolderVote",
					//上传非确定名义持有人EXCEL投票数据
					"parseExcelUncertain":"parseExcelUncertainRest/parseExcelUncertain",
					//非确定名义持有人提交Excel投票接口
					"excelUncertainVote":"excelUncertainVoteRest/excelUncertainVote",
					
                    //验证一码通是否已投票接口接口
                    "confirmUserByUcRest":"confirmUserByUcRest/confirmUserByUc",
                    //set证券账号的接口
                    "validateAccountId":"validateAccountIdRest/validateAccountId",

        		"conflictAccountDetail" : "conflictAccountDetailRest/conflictAccountDetail",
        		//发行人录入投票结果 
        		"entryVoteOutcomeRest" : "entryVoteOutcomeRest/entryVoteOutcome",
        		//发行人代投时查询是否已投票
        		"queryIsVote":"queryIsVoteRest/queryIsVote",

        		"conflictAccountDetail" : "conflictAccountDetailRest/conflictAccountDetail",
        		"sendInstruction":"sendInstructionRest/sendInstruction",
        		"queryPresentOrder":"queryPresentOrderRest/queryPresentOrder",
        		// 下载二维码
        		"downloadPDFOpenVote":"downloadPDFOpenVoteRest/downloadPDFOpenVote",
        		// 录入口令
        		"insertPresentOrder":"insertPresentOrderRest/insertPresentOrder",
        		// 现场投票结果接口
        		"sceneVoteResult":"sceneVoteResultRest/sceneVoteResult",
        		//提交现场投票结果接口
        		"commitSceneVoteResult":"commitSceneVoteResultRest/commitSceneVoteResult",
        		//uums查询申请人信息
        		"queryUumsInfomation":"queryUumsInfomationRest/queryUumsInfomation",
        		//uums查询联想机构信息
        		"queryAgencyNameUums":"queryAgencyNameUumsRest/queryAgencyNameUums",
        		"queryMeetingList":"queryMeetingListRest/queryMeetingList",
        		// 网厅用户注册信息查询
        		"queryUserRegister":"queryUserRegisterRest/queryUserRegister",
        		//投票结果打印PDF
        		"sceneVoteResultPDFExport":"sceneVoteResultPDFExportRest/sceneVoteResultPDFExport",
        		// 查询用户是否已投票
        		"queryWhetherVote":"queryWhetherVoteRest/queryWhetherVote",
        		// 查询证券代码
        		"querySecuritiesCode":"querySecuritiesCodeRest/querySecuritiesCode"
    		}
    	};
        return http_error_statues;
    
} );
