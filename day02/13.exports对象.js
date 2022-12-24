// 默认情况下，exports 和 module.exports 指向同一个对象
console.log(exports); // 输出结果 {}
console.log(module.exports); // 输出结果 {}
console.log(exports == module.exports); // 输出结果 true

// 1. 定义模块私有成员 username
const username = "zs";

// 2. 将私有成员共享出去
exports.username = username;

// 3. 直接挂载新的成员
exports.age = 20;

// 4. 直接挂载方法
exports.sayHello = function () {
  console.log("大家好！");
};

console.log(exports); // 输出 { username: 'zs', age: 20, sayHello: [Function (anonymous)] }

console.log(module.exports); // 输出 { username: 'zs', age: 20, sayHello: [Function (anonymous)] }

console.log(exports == module.exports); // 输出 true

// exports 和 module.exports 的使用误区
// 时刻谨记，require() 模块时，得到的永远是 module.exports 指向的对象
// 注意：为了防止混乱，建议不要在同一个模块中同时使用 exports 和 module.exports
