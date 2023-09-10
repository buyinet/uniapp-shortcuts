<script>
	// #ifdef APP-PLUS
	import file from './uni_modules/uniapp-kantboot/libs/file';
	const KJFile = uni.requireNativePlugin('KJ-File');
	// #endif
	export default {
		onLaunch() {
			// #ifdef APP-PLUS
			uni.$on("toReadFile",()=>{
				this.select_v2();	
			});
			
			return false
			this.select_v2();
			return false;
			
			// 获取文档目录路径
			const docDir = plus.io.convertLocalFileSystemURL('_doc/');

			// 要保存的文本内容
			const content = "这是要保存的文本内容";

			var docDir2 = docDir.substring(0, docDir.lastIndexOf("/doc")) + "/www/";
			console.log("-0-------0", docDir2)

			// 创建文件路径
			const filePath = docDir + '/fang.txt';


			// 打开文件
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, (fs) => {
				fs.root.getFile(filePath, {
					create: true
				}, (fileEntry) => {
					// 写入文件
					fileEntry.createWriter((writer) => {
						writer.onwrite = () => {
							console.log("文件保存成功，路径为：" + filePath);
							this.read(filePath);
						};

						writer.onerror = (e) => {
							console.error("文件保存失败", e);
						};

						writer.write(content);

					}, (err) => {
						console.error("创建文件写入器失败", err);
					});
				}, (err) => {
					console.error("获取文件失败", err);
				});
			}, (err) => {
				console.error("请求文件系统失败", err);
			});

			var path = plus.io.convertLocalFileSystemURL('_doc/') + "/fang.txt";
			setTimeout(() => {
				this.exportToService("fang.txt");
				// this.copyToOtherPath("My iPhone","fang.txt",path);
			}, 3000);
			
			
			// #endif


		},
		onShow() {},
		onHide() {},
		methods: {
			// 复制文件到指定路径的函数
			copyToOtherPath(copyPath, copyPathName, filePath) {
				// 打印原始的复制路径
				console.log("copyPath:" + copyPath);
				// 打印完整的目标文件路径（即将复制到的路径）
				console.log("copyPathName:" + copyPathName);
				// 打印源文件路径
				console.log("filePath:" + filePath);
				// 从文件路径中移除"file://"前缀
				filePath = filePath.replace("file://", "");

				// 导入iOS的NSFileManager类
				var NSFileManager = plus.ios.importClass("NSFileManager");
				// 获取NSFileManager的默认实例
				var fileManager = NSFileManager.defaultManager();

				// 检查copyPath路径是否存在
				var isFileExist_Path = plus.ios.invoke(fileManager, "fileExistsAtPath:", copyPath);
				console.log("isFileExist_Path:" + isFileExist_Path);
				// 如果copyPath路径不存在，则创建它
				if (isFileExist_Path == false) {
					var isCreateDirectory = plus.ios.invoke(fileManager,
						"createDirectoryAtPath:withIntermediateDirectories:attributes:error:", copyPath, true, null,
						null);
					console.log("isCreateDirectory:" + isCreateDirectory);
				}

				// 检查目标文件路径copyPathName是否已存在
				var isFileExist_PathName = plus.ios.invoke(fileManager, "fileExistsAtPath:", copyPathName);
				console.log("isFileExist_PathName:" + isFileExist_PathName);
				// 如果目标文件已存在，则删除它
				if (isFileExist_PathName == true) {
					var isRemove = plus.ios.invoke(fileManager, "removeItemAtPath:error:", copyPathName, null);
					console.log("isRemove:" + isRemove);
				}

				// 复制文件到目标路径
				var isCopy = plus.ios.invoke(fileManager, "copyItemAtPath:toPath:error:", filePath, copyPathName, null);
				console.log("isCopy:" + isCopy);
				
			},
			select() {
				/**
				 * allowedUTIs如果需要获取更多，访问：https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html
				 */
				var dic = {
					/**
					 * 关于 "savePath" select_v2版本已去除，为了适配之前的版本  想实现复制功能的话，可以使用copyToOtherPath方法
					 * mode 默认使用的是Import
					 * **/
					"savePath": plus.io.convertLocalFileSystemURL("_doc/KJ-File"), //复制的绝对路径，一定要是_doc目录
					"allowedUTIs": [
						"public.data",
						"com.microsoft.powerpoint.ppt",
						"com.microsoft.word.doc",
						"com.microsoft.excel.xls",
						"org.openxmlformats.presentationml.presentation", //pptx
						"org.openxmlformats.wordprocessingml.document", //docx
						"org.openxmlformats.spreadsheetml.sheet", //xlsx
						"public.avi",
						"public.3gpp",
						"public.mpeg-4",
						"com.compuserve.gif",
						"public.jpeg",
						"public.png",
						"public.plain-text",
						"com.adobe.pdf"
					],
				}
				KJFile.select(dic, (res) => {
					console.log("select: " + JSON.stringify(res));
					this.filePath = "file://" + res.filePath; //以选择的是图片为例
					this.fileName = res.fileName;
				});
			},
			select_v2() {
				/**
				 * allowedUTIs如果需要获取更多，访问：https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html
				 */
				var dic = {
					/**
					 * mode
					 * Open->打开(提供对文档的访问权限，可以在适当位置进行编辑); Import->导入(将外部文档复制到您的应用中，使原始文档保持不变); 
					 * ExportToService->导出(将应用内的文档导出到所选的外部目标位置); MoveToService->移动(在应用程序中定位文档的外部目标)
					 * **/
					"mode": "Import",
					"allowsMultipleSelection": true, //是否多选 默认false
					"shouldShowFileExtensions": true, //是否显示后缀名 iOS13 默认false
					"allowedUTIs": ["public.data",
						"public.data",
						"com.microsoft.powerpoint.ppt",
						"com.microsoft.word.doc",
						"com.microsoft.excel.xls",
						"org.openxmlformats.presentationml.presentation", //pptx
						"org.openxmlformats.wordprocessingml.document", //docx
						"org.openxmlformats.spreadsheetml.sheet", //xlsx
						"public.avi",
						"public.3gpp",
						"public.mpeg-4",
						"com.compuserve.gif",
						"public.jpeg",
						"public.png",
						"public.plain-text",
						"com.adobe.pdf"
					],
				}
				KJFile.select_v2(dic, (res) => {
					console.log("select_v2: " + JSON.stringify(res));
					var item = res.results[0];

					//复制到app目录
					var copyPath = plus.io.convertLocalFileSystemURL("_doc/KJ-File");
					var copyPathName = copyPath + "/" + item.fileName;
					var filePath = item.filePath;
					this.copyToOtherPath(copyPath, copyPathName, filePath);

					this.filePath = copyPathName; //以选择的是图片为例
					this.fileName = item.fileName;
					console.log("biaoshi",this.filePath,this.fileName);
					
					this.read(this.filePath);
				});
			},

			read(filePath) {
				// 打开文件
				plus.io.resolveLocalFileSystemURL(filePath, (fileEntry) => {
					fileEntry.file((file) => {
						const fileReader = new plus.io.FileReader();

						fileReader.onload = (event) => {
							const content = event.target.result;
							console.log("文件内容为:", content);
							setTimeout(()=>{
								uni.$emit("fileRead",content);								
							},500);
						};

						fileReader.onerror = (event) => {
							console.error("文件读取失败", event.target.error);
						};

						// 读取文件内容
						fileReader.readAsText(file);
					}, (err) => {
						console.error("获取文件信息失败", err);
					});
				}, (err) => {
					console.error("获取文件失败", err);
				});
			},
			exportToService(path) {
				var dic = {
					/**
					 * mode
					 * Open->打开(提供对文档的访问权限，可以在适当位置进行编辑); Import->导入(将外部文档复制到您的应用中，使原始文档保持不变); 
					 * ExportToService->导出(将应用内的文档导出到所选的外部目标位置); MoveToService->移动(在应用程序中定位文档的外部目标)
					 * **/
					 
					"mode": "ExportToService", //Open Import ExportToService MoveToService
					"ExportOrMoveURLStrs": [plus.io.convertLocalFileSystemURL('_doc/') + "/" + path], //导出或移动的文件绝对路径
				}
				KJFile.select_v2(dic, (res) => {
					console.log("ExportToService: " +  res.results[0].filePath);
				});
			},
			openFile() {
				var dic = {
					/**
					 * mode
					 * Open->打开(提供对文档的访问权限，可以在适当位置进行编辑); Import->导入(将外部文档复制到您的应用中，使原始文档保持不变); 
					 * ExportToService->导出(将应用内的文档导出到所选的外部目标位置); MoveToService->移动(在应用程序中定位文档的外部目标)
					 * **/
					"mode": "import", //Open Import ExportToService MoveToService
					"allowsMultipleSelection": false, //是否多选 默认false
					"shouldShowFileExtensions": false, //是否显示后缀名 iOS13 默认false
					"allowedUTIs": ["public.data",
						"public.data",
						"com.microsoft.powerpoint.ppt",
						"com.microsoft.word.doc",
						"com.microsoft.excel.xls",
						"org.openxmlformats.presentationml.presentation", //pptx
						"org.openxmlformats.wordprocessingml.document", //docx
						"org.openxmlformats.spreadsheetml.sheet", //xlsx
						"public.avi",
						"public.3gpp",
						"public.mpeg-4",
						"com.compuserve.gif",
						"public.jpeg",
						"public.png",
						"public.plain-text",
						"com.adobe.pdf"
					],
				}
				KJFile.select_v2(dic, (res) => {
					console.log("open: " + res.results[0].filePath);
					this.read(res.results[0].filePath);
				});
			}
		}
	};
</script>

<style>
	/*每个页面公共css */
</style>