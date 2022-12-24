// 导入格式化时间的自定义模块
const TIME = require("./15.dateFormat");

const dt = new Date();
console.log(dt); // 输出 2022-12-05T05:30:34.251Z

// 调用格式化时间的函数
const newDT = TIME.dateFormat(dt);
console.log(newDT); // 输出 2022-12-05 13:30:34
