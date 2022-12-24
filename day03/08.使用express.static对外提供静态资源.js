const express = require("express");
const app = express();

// express 提供了一个非常好用的函数，叫做 express.static()
// 通过它，我们可以非常方便地创建一个静态资源服务器
// 例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了
//app.use(express.static("public"));
// 现在，你就可以访问 public 目录中的所有文件了：
// http://127.0.0.1/images/1.jpg
// 注意：Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在 URL 中。

// 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：
app.use("/public", express.static("public"));
// 现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了
// http://127.0.0.1/public/images/1.jpg

app.use(express.static("files"));
app.use("/clock", express.static("./clock"));
// http://127.0.0.1/clock/index.html
// 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
