#  PHP-WebSocket-to-NodeJs
简单的nodeJS WebSocket链接，并利用Redis中间层，实现PHP后端推送消息到前台展示。

本项目演示的为PHP推送实时消息至网页前端，利用PHP推送数据至Redis，nodeJS实时接收
并与网页客户端建立WebSocket通讯，保障消息实时传递。

![](https://pek3b.qingstor.com/hexo-blog/hexo-blog/20210626145943.png)

#### 安装要求

1. PHP 7.0以上，并安装 Redis 扩展
2. nodeJS，进入到 server/node/ 目录  执行 npm install
3. 系统安装 redis 服务端
4. npm install -g pm2

#### 测试使用

1. 进入到 server/node/ 目录，启动服务端 `pm2 start channel.js `
2. Chrome浏览器打开 http://127.0.0.1:3001/ 并打开控制台 Network->WS 观察连接情况。
3. 进入到 server/PHP/ 目录， 使用PHP命令发送模拟数据
   `PHP push.PHP test '您好，Node'`

![](https://pek3b.qingstor.com/hexo-blog/hexo-blog/20210626150248.png)
## 参考

https://socket.io/
