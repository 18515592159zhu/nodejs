// 格式化时间的高级做法
// 1. 使用 npm 包管理工具，在项目中安装格式化时间的包 moment
// 2. 使用 require() 导入格式化时间的包
const moment = require("moment");
// 3. 参考 moment 的官方 API 文档，调用对应的方法，对时间进行格式化
// 3.1 调用 moment() 方法，得到当前的时间
// 3.2 针对当前的时间，调用 format() 方法，按照指定的格式进行时间的格式化
const dt = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(dt); // 输出 2022-12-05 13:36:25