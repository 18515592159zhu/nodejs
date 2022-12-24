// 导入模块 11.自定义模块.js
// 在外界使用 require 导入一个自定义模块的时候，得到的成员就是那个模块中通过 module.exports 指向的那个对象
const custom = require("./11.自定义模块.js");

// 输出 { nickname: '小黑', sayHi: [Function: sayHi] }
console.log(custom);
