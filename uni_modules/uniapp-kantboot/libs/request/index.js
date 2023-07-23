import config from './request.config.js';
import util from '../util/index.js';
import i18n from '../i18n/index.js';

var obj = new Object();

obj.config=config;


obj.getToken=function(){
	// console.log( uni.getStorageSync(config.tokenStroageKey));
	return uni.getStorageSync(obj.config.tokenStroageKey);
}

obj.setToken=function(token){
	// console.log( uni.getStorageSync(config.tokenStroageKey));
	// 存储token存储时间
	uni.setStorageSync('tokenStorageSyncGmtTime',new Date().getTime());

	return uni.setStorageSync(obj.config.tokenStroageKey,token);
}

// 获取token存储时间
obj.getTokenStorageTime=function(){
	return uni.getStorageSync('tokenStorageSyncGmtTime');
}

obj.getRootAddress=function(){
	return obj.config.rootAddress;
}


obj.uploadFile=function(result){

	result.header={
		...result.header,
		'languageCode': i18n.getLanguage(),
		// #ifdef APP-PLUS
		"scene": "app",
		// #endif
		// #ifdef MP-WEIXIN
		"scene": "MP-WEIXIN",
		// #endif
	}

	var token=uni.getStorageSync(obj.config.tokenStroageKey);
	if(token!=null&&token.length>0){
		result.header[obj.config.headerField.token]=uni.getStorageSync(obj.config.tokenStroageKey);
	}

	if(result.stateSuccess!=null && res.data[successField]==successStateCode){
		var dataJson=JSON.parse(res.data);
		result.stateSuccess(dataJson);
	}

	if(result.stateFail!=null && res.data[successField]!=successStateCode){
		var dataJson=JSON.parse(res.data);
		result.stateFail(dataJson);
	}

	result.url = obj.config.uploadAddress;

	// 判断网络是否连接
	if(uni.getNetworkType().networkType=="none"){
		uni.showToast({
			icon:"none",
			title:"网络连接失败"
		});
		return false;
	}

	result.fail = function(res){
		if(res.errMsg.indexOf("Failed to connect to ")!=-1){
			uni.showToast({
				icon:"none",
				title:"网络连接失败"
			})
			return false;
		}
	} 

	// 状态码字段
	return uni.uploadFile(result);
}

/**
 * 向服务端发送请求
 * 异步请求
 */
obj.request = function(result){
	// 状态码字段
	var successField=obj.config.responseDataField.stateCode;
	// 状态码
	var successStateCode=obj.config.stateCode.success;
	// 未登录状态码
	var notLoginStateCode=obj.config.stateCode.notLogin;
	
	var rootAddress = obj.config.rootAddress;
	

	result.header={
		...result.header,
		"content-type": result["api"].contentType,
		"platformCode": obj.config.platformCode,
		'languageCode': i18n.getLanguage(),
		// #ifdef APP-PLUS
		"scene": "app",
		// #endif
		// #ifdef MP-WEIXIN
		"scene": "MP-WEIXIN",
		// #endif
	}
	var token=uni.getStorageSync(obj.config.tokenStroageKey);
	// console.log("token",token,config.tokenStroageKey);
	if(token!=null&&token.length>0){
		result.header[obj.config.headerField.token]=uni.getStorageSync(obj.config.tokenStroageKey);
	}
	
	result.method=result["api"].method;
	result.url = rootAddress +"/"+ result["api"].path;

	result.fail = (res)=>{
		console.log("fail",res);
		
		if(res.errMsg.indexOf("request:fail")!=-1){
			setTimeout(()=>{
				this.request(result);
			},1000);
			return false;
		}

		// if(res.errMsg.indexOf("Failed to connect to ")!=-1){
		// 	uni.showToast({
		// 		icon:"none",
		// 		title:"网络连接失败"
		// 	})
		// 	return false;
		// }
	} 
	
	result.complete = (res)=> {
		// 如果请求报错为502
		if(res.statusCode == 502){
			var json=JSON.stringify(result);
			if(uni.getStorageSync(json+"502Number")==null){
				uni.setStorageSync(json+"502Number",1);
			}
			var number=uni.getStorageSync(json+"502Number");
			uni.setStorageSync(json+"502Number",number-(-1));
			if(number>60*60){
				return false;
			}

			setTimeout(()=>{
				this.request(result);
			},1000);
			return false;
		}

		// 如果请求成功
		if(res.statusCode == 200){
			var json=JSON.stringify(result);
			uni.removeStorageSync(json+"502Number");

			if(result.isNoInterceptor!=true){
				
				var routes = getCurrentPages();
				var route = "/"+routes[routes.length - 1].route;

				if(res.data[successField]==notLoginStateCode&&route!=config.loginPage){
					uni.setStorageSync(config.tokenStroageKey,null);
					uni.navigateTo({
						url:config.loginPage
					});
					return false;
				}
			}			
			
			// if (result.success != null) {
			// 	result.success(res);
			// }

			
			// 服务端操作成功
			if(result.stateSuccess!=null && res.data[successField]==successStateCode){

				if(undefined!=result["api"]["isUploadFile"]&&result["api"]["isUploadFile"]){
					var dataJson=JSON.parse(res.data);
					result.stateSuccess(dataJson);
				}else{
					result.stateSuccess(res.data);
				}
			}
			
			// 服务端操作失败
			if(result.stateFail!=null && res.data[successField]!=successStateCode){
				if(result["api"]["isUploadFile"]!=null&&result["api"]["isUploadFile"]){
					var dataJson=JSON.parse(res.data);
					result.stateFail(res.data);
				}else{
					result.stateFail(res.data);
				}
			}
			
			
		}
	};
	if(result["api"]["isUploadFile"]){
		
		return uni.uploadFile(result);
	}
	
	return uni.request(result);
	
}

/**
 * 向服务端发送请求
 * 同步请求
 */
async function requestSync(result){
	// 状态码字段
	var successField=obj.config.responseDataField.stateCode;
	// 状态码
	var successStateCode=obj.config.stateCode.success;
	
	var resultTo=new Object();
	var key="requestSync:"+util.createUUID(16);
	
	return await new Promise((resolve,reject)=>{
		obj.request({
			api:result.api,
			data:result.data,
			success:(res)=>{
				var result=res.data;
				var isSuccess=res.data[successField]==successStateCode;
				var json={
					result,
					isSuccess
				};
				resolve(json);
			},
			fail:(err)=>{
				reject(err);
			}
		});
	});
}

obj.requestSync=function(result){
	return requestSync(result);
}



export default obj;