// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();

// 定义中间件函数 mw1
const mw1 = (req, res, next) => {
  console.log("调用了局部生效的中间件");
  next();
};

// 创建路由
// mw1 这个中间件函数只在"当前路由中生效"，这种用法属于"局部生效的中间件"
app.get("/", mw1, (req, res) => {
  res.send("Home page");
});

// mw1 这个中间件不会影响下面这个路由 ↓ ↓ ↓
app.get("/user", (req, res) => {
  res.send("User page");
  console.log("User page");
});

// 启动 web 服务器
app.listen(80, () => {
  console.log('console.log("express server running at http://127.0.0.1");');
});

// 了解中间件的5个使用注意事项
// 1. 一定要在路由之前注册中间件
// 2. 客户端发送过来的请求，可以连续调用多个中间件进行处理
// 3. 执行完中间件的业务代码之后，不要忘记调用 next() 函数
// 4. 为了防止代码逻辑混乱，调用 next() 函数后不要再写额外的代码
// 5. 连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象
