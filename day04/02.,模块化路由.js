const express = require("express");
// 创建 web 服务器，命名为 app
const app = express();

// 1. 导入路由模块
const userRouter = require("./03.router");

// app.use('/files', express.static('./files'))

// 2. 使用 app.use() 注册路由模块，就是来注册全局中间件
// 为路由模块添加前缀，添加统一的访问前缀 /api
// app.use(userRouter);
app.use("/api", userRouter);

// 启动 web 服务器
app.listen(80, () => {
  console.log('console.log("express server running at http://127.0.0.1");');
});
