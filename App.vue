<script>
	export default {
		onLaunch() {

			// 获取本app的沙盒环境路径
			// #ifdef APP-PLUS
			
	      // const content = '1';
	      // uni.saveFile({
	      //   tempFilePath: '', // 传入空字符串表示不从临时文件中读取，直接使用 data 字段中的内容
	      //   filePath: '_downloads/myfile.txt', // 保存在可读写的目录中，如 Library/Caches 或应用沙盒的根目录下
	      //   data: content, // 要保存的文件内容
	      //   success(res) {
	      //     console.log('文件保存成功', res.savedFilePath);
	      //   },
	      //   fail(err) {
	      //     console.error('文件保存失败', err);
	      //   }
	      // });
			
			// console.log("111")
			// const url=this.$kt.file.byPath('ios/trim.txt');
			// const fileName = 'trim.txt';
			//   uni.downloadFile({
			//     url: url,
			//     success: (res) => {
			//       if (res.statusCode === 200) {
					  
			//         // 下载成功
			//         // 将下载的临时文件保存到指定位置
			//         uni.saveFile({
			//           tempFilePath: res.tempFilePath,
			//           success: (fileRes) => {
			//             // fileRes.savedFilePath 为保存后的文件路径
			//             console.log('File saved:', fileRes.savedFilePath);
			//             // 在这里可以将文件路径保存到应用数据中，用于后续文件管理和共享
			//           },
			//           fail: (err) => {
			//             console.error('Failed to save file:', err);
			//           }
			//         });

			//       } else {
			//         console.error('Download failed:', res);
			//       }
			//     },
			//     fail: (err) => {
			//       console.error('Download error:', err);
			//     }
			//   });
			  

					// 创建文件夹
  const folderName = 'my_app_folder';
       const fileName = 'test.txt';
       const fileContent = 'Hello, this is a test file.';
	   
	   

       // 创建一个在我的iphone中的该app的沙盒文件夹
        plus.io.resolveLocalFileSystemURL(
          '_documents',
          (entry) => {
            entry.getDirectory(
              folderName,
              { create: true },
              (dirEntry) => {
                console.log('文件夹创建成功', dirEntry.fullPath);
				
                // 创建文件
                dirEntry.getFile(
                  fileName,
                  { create: true },
                  (fileEntry) => {
                    console.log('文件创建成功', fileEntry.fullPath);
                    // 写入文件内容
                    fileEntry.createWriter((fileWriter) => {
                      fileWriter.write(fileContent);
                      console.log('写入文件内容成功');
                    }, (err) => {
                      console.error('写入文件内容失败', err);
                    });
                  },
                  (err) => {
                    console.error('文件创建失败', err);
                  }
                );
              },
              (err) => {
                console.error('文件夹创建失败', err);
              }
            );
          },
          (err) => {
            console.error('获取文件系统失败', err);
          }
        );

        

 
       // 获取本app的沙盒环境路径
      //  plus.io.requestFileSystem(
      //   plus.io.PRIVATE_DOC,
      //    (fs) => {
      //      // 创建文件夹
      //      fs.root.getDirectory(
      //        folderName,
      //        { create: true },
      //        (dirEntry) => {
      //          console.log('文件夹创建成功', dirEntry.fullPath);
               
      //          // 创建文件
      //          dirEntry.getFile(
      //            fileName,
      //            { create: true },
      //            (fileEntry) => {
      //              console.log('文件创建成功', fileEntry.fullPath);
      //              // 写入文件内容
      //              fileEntry.createWriter((fileWriter) => {
      //                fileWriter.write(fileContent);
      //                console.log('写入文件内容成功');


      //              }, (err) => {
      //                console.error('写入文件内容失败', err);
      //              });
      //            },
      //            (err) => {
      //              console.error('文件创建失败', err);
      //            }
      //          );
      //        },
      //        (err) => {
      //          console.error('文件夹创建失败', err);
      //        }
      //      );
      //    },
      //    (err) => {
      //      console.error('获取文件系统失败', err);
      //    }
      //  );

			// 创建一个文件保存到沙盒中
			// plus.io.requestFileSystem(plus.io.PRIVATE_DOC, fs => {
			// 	fs.root.getFile("test.txt", {
			// 		create: true
			// 	}, fileEntry => {
			// 		fileEntry.createWriter(writer => {
			// 			console.log(writer,"w")
			// 			writer.write("test");
			// 			console.log("write success");
			// 		}, err => {
			// 			console.log(err.message);
			// 		});
			// 	}, err => {
			// 		console.log(err.message);
			// 	});
			// }, err => {
			// 	console.log(err.message);
			// });



			// #endif

		},
		onShow() {},
		onHide() {},
		methods: {}
	};
</script>

<style>
	/*每个页面公共css */
</style>
