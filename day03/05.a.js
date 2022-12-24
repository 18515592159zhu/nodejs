// 在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会按顺序分别尝试加载以下的文件：
// ① 按照确切的文件名进行加载
// ② 补全 .js 扩展名进行加载
// ③ 补全 .json 扩展名进行加载
// ④ 补全 .node 扩展名进行加载
// ⑤ 加载失败，终端报错
const m = require("./test");
console.log(m); // 输出 加载了test文件

// const m = require("./test.js");
// console.log(m); // 输出 加载了test.js文件

// const m = require("./test.json");
// console.log(m); // 输出 { name: '加载了test.json文件' }

// const m = require("./test.node");
// console.log(m);
