// 1.导入fs文件系统模块
const fs = require("fs");

// 2，调用fs.writeFile()方法，写入文件的内容
// 参数一：表示文件的存放路径
// 参数二：表示要写入的内容
// 参数三：回调函数
fs.writeFile("./files/2.txt", "Hello Node.js", function (err) {
  // 如果文件写入成功，则err的值等于null
  // 如果文件写入失败，则err的值等于一个错误对象
  // console.log(err);
  if (err) {
    return console.log("文件写入失败！" + err.message);
  }
  console.log("文件写入成功！");
});
