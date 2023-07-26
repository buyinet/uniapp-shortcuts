<script>
	export default {
		onLaunch() {

			// 获取本app的沙盒环境路径
			// #ifdef APP-PLUS

      // 创建文件夹
  // const folderName = 'my_app_folder';
  //      const fileName = 'test.txt';
  //      const fileContent = 'Hello, this is a test file.';

  //      // 创建一个在我的iphone中的该app的沙盒文件夹
  //       plus.io.resolveLocalFileSystemURL(
  //         '_doc',
  //         (entry) => {
  //           entry.getDirectory(
  //             folderName,
  //             { create: true },
  //             (dirEntry) => {
  //               console.log('文件夹创建成功', dirEntry.fullPath);
                
  //               // 创建文件
  //               dirEntry.getFile(
  //                 fileName,
  //                 { create: true },
  //                 (fileEntry) => {
  //                   console.log('文件创建成功', fileEntry.fullPath);
  //                   // 写入文件内容
  //                   fileEntry.createWriter((fileWriter) => {
  //                     fileWriter.write(fileContent);
  //                     console.log('写入文件内容成功');
  //                   }, (err) => {
  //                     console.error('写入文件内容失败', err);
  //                   });
  //                 },
  //                 (err) => {
  //                   console.error('文件创建失败', err);
  //                 }
  //               );
  //             },
  //             (err) => {
  //               console.error('文件夹创建失败', err);
  //             }
  //           );
  //         },
  //         (err) => {
  //           console.error('获取文件系统失败', err);
  //         }
  //       );

        

 
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
