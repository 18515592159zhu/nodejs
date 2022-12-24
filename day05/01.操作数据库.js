// 1.导入 mysql 模块
const mysql = require("mysql");

// 2. 建立与 MySQL 数据库的连接
const db = mysql.createPool({
  host: "127.0.0.1", // 数据库的 IP 地址
  user: "root", // 登录数据库的账号
  password: "root", // 登录数据库的密码
  database: "my_db_01", // 指定要操作哪个数据库
});

// 测试 mysql 模块能否正常工作
db.query("select 1", (err, results) => {
  // mysql 模块工作期间报错了
  if (err) {
    return console.log(err.message);
  }
  // 只要能打印出 [ RowDataPacket { '1': 1 } ] 的结果，就证明数据库连接正常
  console.log(results);
});

// 使用 mysql 模块操作 MySQL 数据库
// 查询 users 表中所有的数据
db.query("select * from users", (err, results) => {
  // 查询数据失败
  if (err) {
    return console.log(err.message);
  }
  // 查询数据成功
  // 注意：如果执行的是 select 查询语句，则执行的结果是数组
  console.log(results);
});

// 向 users 表中新增数据，其中 username 为 Spider-Man ，password 为 pcc321
// 1. 要插入到 users 表中的数据对象
// const user = { username: "Spider-Man", password: "pcc321" };
// // 2. 待执行的 SQL 语句，其中英文的 ? 表示占位符
// const sqlStr = "insert into users (username, password) values (? , ? )";
// // 3. 使用数组的形式，依次为 ? 占位符指定具体的值
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//   // 失败
//   if (err) {
//     return console.log(err.message);
//   }
//   // 成功
//   // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
//   // 可以通过 affectedRows 属性，来判断是否插入数据成功
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功！");
//   }
// });

// 演示插入数据的便捷方式
// 向表中新增数据时，如果数据对象的每个属性和数据库表的字段一一对应，则可以通过如下方式快速插入数据
// 1. 要插入到 users 表中的数据对象
// const user = { username: "Spider-Man2", password: "pcc4321" };
// // 2. 待执行的 SQL 语句，其中英文的 ? 表示占位符
// const sqlStr = "insert into users set ?";
// // 3. 直接将数据对象当作占位符的值
// db.query(sqlStr, user, (err, results) => {
//   // 失败
//   if (err) {
//     return console.log(err.message);
//   }
//   // 成功
//   // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
//   // 可以通过 affectedRows 属性，来判断是否插入数据成功
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功！");
//   }
// });

// 更新表中的数据
// // 1. 要更新的数据对象
// const user = { id: 7, username: "bbb", password: "888" };
// // 2. 要执行的 SQL 语句
// const sqlStr = "update users set username = ? , password = ? where id = ?";
// // 3. 调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//   // 失败
//   if (err) {
//     return console.log(err.message);
//   }
//   // 成功
//   if (results.affectedRows === 1) {
//     console.log("更新数据成功！");
//   }
// });

// 演示更新数据的便捷方式
// 更新表数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速更新表数据
// 1. 要更新的数据对象
// const user = { id: 7, username: "aaaa", password: "0000" };
// // 2. 要执行的 SQL 语句
// const sqlStr = "update users set ? where id = ?";
// // 3. 调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
// db.query(sqlStr, [user, user.id], (err, results) => {
//   // 失败
//   if (err) {
//     return console.log(err.message);
//   }
//   // 成功
//   if (results.affectedRows === 1) {
//     console.log("更新数据成功！");
//   }
// });

// 删除数据
// 在删除数据时，推荐根据 id 这样的唯一标识，来删除对应的数据
// 1. 要执行的 SQL 语句
// const sqlStr = "delete from users where id= ?";
// // 2. 调用 db.query() 执行 SQL 语句的同时，为占位符指定具体的值
// // 注意：如果 SQL 语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// //      如果 SQL 语句中只有一个占位符，则可以省略数组
// db.query(sqlStr, 7, (err, results) => {
//   if (err) return console.log(err.message);
//   // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
//   if (results.affectedRows === 1) {
//     console.log("删除数据成功！");
//   }
// });

// 标记删除
// 使用 DELETE 语句，会真正的把数据从表中删除，为了保险起见，推荐使用标记删除的形式，来模拟删除的动作
// 所谓的标记删除，就是在表中设置类似于 status 这样的状态字段，来标记当前这条数据是否被删除
// 当用户执行了删除的动作时，我们并没有执行 DELETE 语句把数据删除掉
// 而是执行了 UPDATE 语句，将这条数据对应的 status 字段标记为删除即可
// 标记删除：使用 UPDATE 语句替代为 DELETE 语句，只更新数据的状态，并没有真正的删除
// status：用户的状态，是一个布尔值，0 表示状态正常，1 表示被禁用
const sqlStr = "update users set status = ? where id= ?";
db.query(sqlStr, [1, 7], (err, results) => {
  // 失败
  if (err) return console.log(err.message);
  // 成功
  if (results.affectedRows === 1) {
    console.log("标记删除成功");
  }
});
