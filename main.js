import App from './App'
import Vue from 'vue'

// 前往 https://gitee.com/bygo/uniapp-kantboot 下载，并阅读文档
import kt from './uni_modules/uniapp-kantboot/index.js';
import uView from '@/uni_modules/uview-ui'
import api from './api/index.js';
import selfInfo from './utils/selfInfo.js';
import ovo from './utils/ovo.js';
import system from './utils/system.js';



Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'



// start: 配置request
kt.request.config = {
	// 请求地址
	// "rootAddress": "https://test.kantboot.com",
	// "rootAddress": "http://169.254.98.224:8889",
	// "rootAddress": "https://ovo.kantboot.com",
	"rootAddress": "http://localhost:8889",

	// 文件上传地址
	"uploadAddress": "https://ovo.file.aaarfyh.com/system-file/file/upload",
	// 文件访问地址
	"fileAddress": "https://ovo.file.aaarfyh.com/system-file/file/visit",



	"headerField": {
		"token": "token" // 请求时在token的字段
	},

	// token存储的key
	"tokenStroageKey": "token",

	// 设置平台信息
	"platformCode": "KANTBOOT",

	// 响应数据字段
	"responseDataField": {
		"stateCode": "state", // 状态码字段
		"stateSuccessMessage": "msg", // 状态为“成功”时的消息字段
		"stateFalidMessage": "errMsg", // 状态为“失败”时的消息字段
		"bodyData": "data" //主体数据字段		
	},

	"stateCode": {
		"success": "2000", // 状态为“成功”时的状态码
		"notLogin": "7777" //	状态为“未登陆时”时的状态码
	},

	// 登录页面
	"loginPage": "/pages/login/login"

}
// end: 配置request

Vue.prototype.$api = api;
Vue.prototype.$kt = kt;
Vue.prototype.$selfInfo = selfInfo;
Vue.prototype.$ovo = ovo;
Vue.prototype.$system = system;


Vue.config.productionTip = false



App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount();
