// 这是包的入口文件

// 导入两个模块，得到需要向外共享的方法
const date = require("./src/dateFormat");
const escape = require("./src/htmlEscape");

// 使用 module.exports 把对应的方法共享出去
module.exports = {
  ...date, // ... 三个小点代表展开运算符，将这个对象的所有属性展开（es6语法新特性：扩展运算符）
  ...escape,
};
