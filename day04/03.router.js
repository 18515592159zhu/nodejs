// 这是路由模块
// 1. 导入 express 模块
const express = require("express");

// 2. 创建路由对象：调用 express.Router() 函数创建路由对象
const router = express.Router();

// 3. 挂载获取用户列表的路由
router.get("/user/list", function (req, res) {
  res.send("Get user list");
});

// 4. 挂载添加用户的路由
router.post("/user/add", function (req, res) {
  res.send("Add new user");
});

// 5. 向外导出路由对象
module.exports = router;

// 为了方便对路由进行模块化管理
// Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。
// 将路由抽离为单独模块的步骤如下：
// ① 创建路由模块对应的 .js 文件
// ② 调用 express.Router() 函数创建路由对象
// ③ 向路由对象上挂载具体的路由
// ④ 使用 module.exports 向外共享路由对象
// ⑤ 使用 app.use() 函数注册路由模块
