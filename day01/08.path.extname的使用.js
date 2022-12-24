const path = require("path");

// 这是文件的存放路径
const fpath = "/a/b/c/index.html";

// 获取路径中的文件扩展名
// 使用 path.extname() 方法，可以获取路径中的扩展名部分
// 参数：path <string>必选参数，表示一个路径的字符串
// 返回: <string> 返回得到的扩展名字符串
const fext = path.extname(fpath);
console.log(fext); //输出 .html
