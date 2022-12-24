// 输出 { gender: '男', age: 22 }
// exports.username = "zs";
// module.exports = {
//   gender: "男",
//   age: 22,
// };

// 输出 { username: 'zs' }
// module.exports.username = "zs";
// exports = {
//   gender: "男",
//   age: 22,
// };

// 输出 { username: 'zs', gender: '男' }
// exports.username = "zs";
// module.exports.gender = "男";

// 输出 { username: 'zs', gender: '男', age: 22 }
exports = {
  username: "zs",
  gender: "男",
};
module.exports = exports;
module.exports.age = 22;

// 时刻谨记，require() 模块时，得到的永远是 module.exports 指向的对象
// 因为指向了一个新对象，之前的旧对象数据将会覆盖
