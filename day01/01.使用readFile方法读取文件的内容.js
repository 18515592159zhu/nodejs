// 以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 dataStr 的值
// 1.导入fs模块，来操作文件
const fs = require("fs");
// 2.调用fs.readFile()方法读取文件
// 参数一：读取文件的存放路径
// 参数二：读取文件时采用的编码格式，一般默认指定utf-8
// 参数三：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile("./files/1.txt", "utf-8", function (err, dataStr) {
  // 打印失败的结果
  // 如果读取成功，则err的值为null
  // 如果读取失败，则err的值为错误对象，dataStr的值为undefind
  console.log(err);
  console.log("------");
  // 打印成功的结果
  console.log(dataStr);
});
