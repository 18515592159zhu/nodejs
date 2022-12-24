const express = require("express");
// 创建路由对象
const apiRouter = express.Router();

// 定义 GET 接口
apiRouter.get("/get", (req, res) => {
  // 获取到客户端通过查询字符串，发送到服务器的数据
  const query = req.query;
  // 调用 res.send() 方法，把数据响应给客户端
  res.send({
    status: 0, //状态：0表示成功，1表示失败
    msg: "Get 请求成功！", // 状态描述
    data: query, // 需要响应给客户端的具体数据
  });
});

// 定义 POST 接口
apiRouter.post("/post", (req, res) => {
  // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
  // 注意：如果要获取 URL-encoded 格式的请求体数据，必须配置中间件 app.use(express.urlencoded({ extended: false }))
  const body = req.body;
  // 调用 res.send() 方法，把数据响应给客户端
  res.send({
    status: 0, //状态：0表示成功，1表示失败
    msg: "POST 请求成功！", // 状态描述
    data: body, // 需要响应给客户端的具体数据
  });
});

// 定义 DELETE 接口
apiRouter.delete("/delete", (req, res) => {
  res.send({
    status: 0,
    msg: "DELETE 请求成功！",
  });
});

module.exports = apiRouter;
