const express = require("express");
const app = express();

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
  console.log("这是定义全局中间件的简化形式");
  const time = Date.now();
  // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.startTime = time;
  next();
});

app.get("/", (req, res) => {
  res.send("Home page." + req.startTime);
});

app.get("/user", (req, res) => {
  res.send("User page." + req.startTime);
});

// 启动 web 服务器
app.listen(80, () => {
  console.log('console.log("express server running at http://127.0.0.1");');
});
