// 引入 path 路径模块
const path = require("path");

// 定义文件的存放路径
const fpath = "/a/b/c/index.html";

const fullName = path.basename(fpath);
console.log(fpath); // 输出 /a/b/c/index.html
console.log(fullName); // 输出 index.html

// 获取路径中的文件名
// 使用 path.basename()方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名
// 参数一: path<string> 必选参数，表示一个路径的字符串
// 参数二: ext<string> 可选参数，表示文件扩展名
// 返回<string> 表示路径中的最后一部分
const nameWithoutExt = path.basename(fpath, ".html");

console.log(nameWithoutExt); // 输出 index
