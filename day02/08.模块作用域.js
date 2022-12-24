// Node.js 中的模块作用域
// 什么是模块作用域
// 和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域

// 1. 在模块作用域中定义常量 username
const username = "张三";

// 2. 在模块作用域中定义函数 sayHello
function sayHello() {
  console.log("大家好，我是：" + username);
}
