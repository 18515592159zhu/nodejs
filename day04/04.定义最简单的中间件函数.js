const express = require("express");
const app = express();

// 常量 mv 所指向的，就是一个中间件函数
const mv = function (req, res, next) {
  console.log("这是一个最简单的中间件函数");
  // 注意：在当前中间件的业务处理完毕后，必须调用 next() 函数
  // 表示把流转关系转交给下一个中间件或路由
  next();
};

// 客户端发起的任何请求，达到服务器之后，都会触发的中间件，叫做全局生效中间件
// 通过调用 app.use(中间件函数) ，即可定义一个全局生效的中间件
// 全局生效的中间件
app.use(mv);

// 定义全局中间件的简化形式
// app.use((req, res, next) => {
//   console.log("这是最简单的中间件函数的简化形式");
//   next();
// });

// 请求这个路由，会触发上述全局中间件
app.get("/", (req, res) => {
  console.log("调用了 / 这个路由");
  res.send("Home page.");
});

// 请求这个路由，会触发上述全局中间件
app.get("/user", (req, res) => {
  console.log("调用了 /user 这个路由");
  res.send("User page.");
});

// 启动 web 服务器
app.listen(80, () => {
  console.log('console.log("express server running at http://127.0.0.1");');
});
