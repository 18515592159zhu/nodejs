const custom = require("./08.模块作用域");

// 输出 {} 空对象
// 在 09.test.js 模块中，无法访问到 08.模块作用域.js 模块中的私有成员
console.log(custom);
