// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();

// 定义中间件函数
const mw1 = (req, res, next) => {
  console.log("调用了第一个局部生效的中间件");
  next();
};

const mw2 = (req, res, next) => {
  console.log("调用了第二个局部生效的中间件");
  next();
};

// 以下两种写法是"完全等价"的，可根据自己的喜好，选择任意一种方式进行使用
// 创建路由
app.get("/", mw1, mw2, (req, res) => {
  res.send("Home page.");
});

app.get("/user", [mw1, mw2], (req, res) => {
  res.send("User page.");
});

// 启动 web 服务器
app.listen(80, () => {
  console.log('console.log("express server running at http://127.0.0.1");');
});
