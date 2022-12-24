// 1. 加载内置的 fs 文件系统模块
const fs = require("fs");

// 2. 加载用户自定义的模块
// 注意：在使用 require 加载用户自定义模块期间，可以省略 .js 的后缀名
const m1 = require("./06.m1.js");

// 3. 加载第三方模块（关于第三方模块的下载和使用，会在后面的课程中进行专门的讲解）
const moment = require("moment");

