// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();
// Node.js 内置了一个 querystring 模块，专门用来处理查询字符串。
// 通过这个模块提供的 parse() 函数，可以轻松把查询字符串，解析成对象的格式
// 导入 Node.js 内置的 querystring 模块
const qs = require("querystring");

// 这是解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 定义变量，用来存储客户端发送过来请求体数据
  let str = "";
  // 监听 req 对象的 data 事件（客户端发送过来的新的请求体数据）
  req.on("data", (chunk) => {
    // 拼接请求体数据，隐式转换为字符串
    str += chunk;
  });

  // 3. 监听 req 的 end 事件（请求体发送完毕后自动触发）
  req.on("end", () => {
    // 在 str 中存放的是完整的请求体数据
    console.log(str);
    // TODO: 调用 qs.parse() 方法，把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str);
    console.log(body);

    // 将解析出来的请求体对象，挂载为 req.body 属性
    req.body = body;
    // 最后一定要调用 next() 函数，执行后续的业务逻辑
    next();
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log("Express server running at http://127.0.0.1");
});
