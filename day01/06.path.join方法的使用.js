const path = require("path");
const fs = require("fs");

// path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
const pathStr = path.join("/a", "/b/c", "../../", "./d", "e");
console.log(pathStr); // 输出 \a\d\e

const pathStr2 = path.join(__dirname, "./files/1.txt");
console.log(__dirname); // 输出 D:\nodejscode\day01

console.log(pathStr2); // 输出 D:\nodejscode\files\1.txt

// 注意：今后凡是涉及到路径拼接的操作，都要使用path.join()方法进行处理。不要直接使用 + 进行字符串的拼接
fs.readFile(
  path.join(__dirname, "./files/1.txt"),
  "utf-8",
  function (err, dataStr) {
    if (err) {
      return console.log(err.message);
    }
    console.log(dataStr);
  }
);
