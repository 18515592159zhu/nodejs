// 导入 http 模块
const http = require("http");
// 创建 web 服务器实例
const server = http.createServer();
// 为服务器实例绑定 request 事件，监听客户端发送过来的网络请求
// 使用服务器实例的 .on() 方法，为服务器绑定一个 request 事件处理函数
server.on("request", function (req, res) {
  // 只要有客户端来请求我们自己的服务器，就会触发 request 事件，从而调用这个事件处理函数
  console.log("Someone visit our web server.");
});
// 启动服务器
// 调用 server.listen(端口号,回调函数)方法，即可启动 web 服务器
server.listen(8080, function () {
  console.log("server running at http://127.0.0.1:8080");
});
