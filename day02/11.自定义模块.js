// 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
// 外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象。
// 在一个自定义模块中，默认情况下， module.exports = {}
const age = 20;
// 1. 向 module.exports 对象上挂载属性 username
module.exports.username = "zs";

// 2. 向 module.exports 对象上挂载方法 sayHello
module.exports.sayHello = function () {
  console.log("Hello Node.js!");
};

// 把模块内部的私有成员 age 属性 通过 module.exports 向外暴露出去，让外界能够使用
// 如果不写 module.exports.age = age  那么 age 属性就是该模块的私有成员变量，外界是访问不到的
module.exports.age = age;

// 3. 让 module.exports 指向一个全新的对象，旧对象将不再生效
module.exports = {
  nickname: "小黑",
  sayHi() {
    console.log("Hi!");
  },
};
