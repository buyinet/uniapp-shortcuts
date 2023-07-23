var config={
	"rootAddress":"https://test1.kantboot.com",

	"uploadAddress": "https://ovo.file.aaarfyh.com/system-file/file/upload",
	
	// 文件访问地址
	"fileAddress": "https://ovo.file.aaarfyh.com/system-file/file/visit",
	
	"rootWebSocketAddressList":[
		"ws://heimi.kantboot.com/taskSocket"
	],
			
	"headerField":{
		"token":"token"
	},
	
	// token存储的key
	"tokenStroageKey":"token",
	
	// 设置平台信息
	"platformCode":"PHILOSOPHY_SHOUT",
	
	// 响应数据字段
	"responseDataField":{
		"stateCode":"state", // 状态码字段
		"stateSuccessMessage":"msg" , // 状态为“成功”时的字段
		"stateFalidMessage":"errMsg", // 状态为“失败”时的字段
		"bodyData":"data" //主体数据字段		
	},
	
	// 通用状态码
	"stateCode":{
		"success":"2000", //成功状态
		"notLogin":"-777" //未登录状态
	},
	
	// 登录页面
	"loginPage":"/pages/login/login"
	
	
}

export default config;