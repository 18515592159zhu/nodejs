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

// 自 Express 4.16.0 版本开始，Express 内置了3个常用的中间件，极大的提高了 Express 项目的开发效率和体验
// ① express.static 快速托管静态资源的内置中间件，例如：HTML文件、图片、CSS样式等（无兼容性）
// ② express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
// ③ express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）

// 注意：除了错误级别中间件，其它的中间件必须在路由之前进行配置

// 配置解析 application/json 格式数据的内置中间件，解析表单中的 JSON 格式的数据
app.use(express.json());

// 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件，解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }));

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log("调用了第一个局部生效的中间件");
  next();
};

const mw2 = (req, res, next) => {
  console.log("调用了第二个局部生效的中间件");
  next();
};

// 2. 创建路由
app.post("/user", [mw1, mw2], (req, res) => {
  // 在服务器，可用使用 req.body 这个属性，来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body);
  res.send("User page OK");
});

app.post("/book", (req, res) => {
  // 服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
  console.log(req.body);
  res.send("Book page OK");
});

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, () => {
  console.log('console.log("express server running at http://127.0.0.1");');
});
