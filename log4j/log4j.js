/**
 * 通过传入函数名，进行打印  时间---日志级别----函数名----日志内容
 */
var log4js = require('log4js');

log4js.configure({
  appenders: [
    { type: 'console' }, //控制台输出
    {
      type: 'datefile', //文件输出
      filename: 'logs/log',
      pattern: "_yyyy-MM-dd",
      maxLogSize: 1024,
      alwaysIncludePattern: false,  
      backups:4,
      category: 'logger' 
    }
  ],
  replaceConsole: true
});

//配置日志外模块调用
exports.logger = function(name){
	  var logger = log4js.getLogger(name);
	  logger.setLevel('INFO');
	  return logger;
};

