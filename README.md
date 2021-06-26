#  PHP-push-to-NodeJs
利用redis消息队列作为中间件，实现多语言之间的消息实时推送。

本项目演示的为php推送实时消息至网页前端，利用php推送数据至redis，nodeJS实时接收
并与网页客户端建立websocket通讯，保障消息实时传递。

简单的nodeJS websocket链接，并利用redis中间层，实现PHP后端推送消息到前台。

#### 安装要求

1. php7.0以上，并安装 redis 扩展
2. nodeJS，进入到 server/node/ 目录  执行 npm install
3. 系统安装 redis 服务端
4. npm install -g pm2

#### 测试使用

1. 进入到 server/node/ 目录，启动服务端 `pm2 start channel.js `
2. Chrome浏览器打开 http://127.0.0.1:3001/ 并打开控制台 Network->WS 观察连接情况。
3. 进入到 server/php/ 目录， 使用php命令发送模拟数据
   `php push.php test '您好，Node'`


## 参考

https://socket.io/
