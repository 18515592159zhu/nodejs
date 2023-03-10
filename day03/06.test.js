// 目录作为模块
// 当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：
// 1. 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
// 2. 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件。
// 3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module 'xxx'

require("./testm"); // 输出 通过 package.json 加载了 a.js 文件
