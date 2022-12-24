// 导入 http 模块
const http = require("http");

// 创建 web 服务器
const server = http.createServer();

server.on("request", function (req, res) {
  const url = req.url;
  const method = req.method;
  const str = `您请求的 URL 地址是 ${url}，请求的 method 类型为 ${method}`;
  // 为了防止中文显示乱码的问题，需要设置 Content-Type 响应头，解决中文乱码的问题，调用 res.setHeader() 方法，
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  // console.log(str);
  // res.end() 将内容响应给客户端
  res.end(str);
});

server.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
