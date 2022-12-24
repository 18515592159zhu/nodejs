// 创建基本的 web 服务器
// 1. 导入 express
const express = require("express");
// 2. 创建 web 服务器
const app = express();

// 4. 监听客户端的 GET和 POST 请求，并向客户端响应具体的内容
// 参数一：客户端请求的 url 地址
// 参数二：请求对应的处理函数
//      req：请求对象（包含了与请求相关的属性与方法）
//      res：响应对象（包含了与响应相关的属性与方法）
app.get("/user", function (req, res) {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
  res.send({ name: "zs", age: 20, gender: "男" });
});

app.post("/user", (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个文本字符串
  res.send("请求成功");
});

// 获取 URL 中携带的查询参数
app.get("/", (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意：默认情况下，req.query 是一个空对象
  // 客户端使用 ?name=zs&age=20 这种查询字符串的形式，发送到服务器的参数
  console.log(req.query); // 输出 { name: 'zs', age: '20' }
  res.send(req.query);
});

// 获取 URL 中的动态参数
// 注意：这里的 :id 是一个动态的参数
// URL 地址中，可以通过 :参数名 的形式，匹配动态参数值
app.get("/user/:id", (req, res) => {
  // req.params 默认是一个空对象
  // 通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数
  console.log(req.params); // 访问地址：http://127.0.0.1/user/:username  输出 { id: ':username' }
  res.send(req.params);
});

// 3. 调用app.listen(端口号、启动成功后的回调函数)，启动 web 服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
