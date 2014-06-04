说明：

1、  日志单独一个文件且日志级别已经固定为INFO(可以自行修改)
2、  外部调用，就类似index.js中一样 方式
   var logger = require('../log4j.js').logger('index');
        通过导入模块并对函数命名即可