// 1.导入需要的fs文件系统模块
const fs = require("fs");
// 2.使用fs.readFile()方法，读取目录下的成绩.txt文件
fs.readFile("./files/成绩.txt", "utf-8", function (err, dataStr) {
  // 3.判断是否读取成功
  if (err) {
    return console.log("读取文件失败！" + err.message);
  }
  console.log("文件读取成功！" + dataStr);

  // 4.1.先把成绩的数据，按照空格进行分割
  const arrOld = dataStr.split(" ");
  console.log(arrOld); // 输出 [ '小红=99', '小白=100', '小黄=70', '小黑=66', '小绿=88' ]

  // 4.2.循环分割后的数组，对每一项数据，进行字符串的替换操作
  const arrNew = [];
  arrOld.forEach((item) => {
    arrNew.push(item.replace("=", "："));
  });
  console.log(arrNew); // 输出 [ '小红：99', '小白：100', '小黄：70', '小黑：66', '小绿：88' ]

  // 4.3.把新数组中的每一项，进行合并，得到一个新的字符串
  const newStr = arrNew.join("\r\n");
  console.log(newStr);
  /*
  打印结果：
  小红：99
  小白：100
  小黄：70
  小黑：66
  小绿：88
  */
  // 5.调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
  fs.writeFile("./files/成绩-ok.txt", newStr, function (err) {
    if (err) {
      return console.log("成绩写入失败！" + err.message);
    }
    console.log("成绩写入成功！");
  });
});
