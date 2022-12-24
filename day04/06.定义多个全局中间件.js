const express = require("express");
const app = express();

// 定义第一个全局中间件
app.use((req, res, next) => {
  console.log("调用了第一个全局中间件");
  next();
});
// 定义第二个全局中间件
app.use((req, res, next) => {
  console.log("调用了第二个全局中间件");
  next();
});

// 定义一个路由，请求这个路由，会依次触发上述两个全局中间件
app.get("/user", (req, res) => {
  res.send("User page.");
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
