socket-demo.js说明

1、 页面chat.html通过页面chat.js脚本输入"Enter"键发送socket.send(msg)触发服务器脚本
   socket.on('message',*)事件(事件message默认的)
   
2、 服务器接受到页面对应的触发事件之后，把页面传入的参数msg广播给所有用户

3、 页面通过事件监听2步骤触发的事件进而显示页面