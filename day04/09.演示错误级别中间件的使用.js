// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();

// 中间件的分类
// 1. 应用级别的中间件
// 2. 路由级别的中间件
// 3. 错误级别的中间件
// 4. Express 内置的中间件
// 5. 第三方的中间件

// 1. 应用级别的中间件
// 通过 app.use() 或 app.get() 或 app.post() ，绑定到 app 实例上的中间件，叫做应用级别的中间件
// 应用级别的中间件（全局中间件）
// app.use((req, res, next) => {
//   next();
// });

// 定义中间件函数
// const mw1 = (req, res, next) => {
//   console.log("调用了局部生效的中间件");
//   next();
// };

// 应用级别的中间件（局部中间件）
// app.get("/", mw1, (req, res) => {
//   res.send("Home page");
// });

// 2.路由级别的中间件
// 绑定到 express.Router() 实例上的中间件，叫做路由级别的中间件
// 它的用法和应用级别的中间件没有任何区别
// 只不过，应用级别的中间件是绑定到 app 实例上
// 路由级别的中间件绑定到 router 实例上
// 创建路由对象
// const router = express.Router();

// 路由级别的中间件
// router.use(function (req, res, next) {
//   console.log("time:", Date.now());
//   next();
// });

// app.use("/router", router);

// 错误级别的中间件
// 错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误信息，从而防止项目异常崩溃的问题
// 格式：错误级别中间件的 function 处理函数中，必须有4个形参，形参顺序从前到后，分别是 (err,req,res,next)
// 定义中间件函数
const mw1 = (req, res, next) => {
  console.log("调用了第一个局部生效的中间件");
  next();
};

const mw2 = (req, res, next) => {
  console.log("调用了第二个局部生效的中间件");
  next();
};

// 创建路由
app.get("/", [mw1, mw2], (req, res) => {
  throw new Error("服务器内部发生了错误！"); // 抛出一个自定义错误
  res.send("Home page");
});

// 错误级别的中间件
app.use((err, req, res, next) => {
  console.log("发生了错误：" + err.message); // 在服务器打印错误消息
  res.send("Error！" + err.message); // 向客户端响应错误相关的内容
});

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, () => {
  console.log('console.log("express server running at http://127.0.0.1");');
});
