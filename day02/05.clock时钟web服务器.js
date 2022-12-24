// 案例 - 实现 clock 时钟的 web 服务器
// 1 导入需要的模块
// 1.1 导入 http 模块
const http = require("http");

// 1.2 导入 fs 文件系统模块
const fs = require("fs");

// 1.3 导入 path 路径处理模块
const path = require("path");

// 2 创建基本的 web 服务器
// 2.1 创建 web 服务器
const server = http.createServer();

// 2.2 监听 web 服务器的 request 事件
server.on("request", (req, res) => {
  // 3 将资源的请求 url 地址映射为文件的存放路径
  // 3.1 获取到客户端请求的 url 地址
  const url = req.url;
  // 3.2 把请求的 url 地址，映射为本地文件的存放路径
  // const fpath = path.join(__dirname, url);

  // 5 优化资源的请求路径
  // 5.1 预定义一个空白的文件存放路径
  let fpath = "";
  if (url == "/") {
    // 5.2 如果请求的路径为 / ，则手动指定文件的存放路径
    fpath = path.join(__dirname, "./clock/index.html");
    console.log(fpath);
  } else {
    //      /index.html
    //      /index.css
    //      /index.js
    // 5.3 如果请求的路径不为 / ，则动态拼接文件的存放路径
    fpath = path.join(__dirname, "./clock", url);
    console.log(fpath);
  }

  // 4 读取文件内容并响应给客户端
  // 4.1 根据“映射”过来的文件路径读取文件的内容
  fs.readFile(fpath, "utf-8", (err, dataStr) => {
    // 4.2 读取失败后，向客户端响应固定的“错误信息”
    if (err) {
      return res.end("404 Not Found!");
    }
    // 4.3 读取文件成功后，将读取成功的内容，响应给客户端
    res.end(dataStr);
  });
});

// 2.3 启动 web 服务器
server.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
