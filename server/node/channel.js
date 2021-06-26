#!/usr/bin/env node

/*
 * 根据分组频道来进行消息的分发
 * 1. 主要实现服务端对客户端消息的传递
 * 2. 通过redis消息队列来实现多语言的交互
 */
// 初始化 socket io
const express = require('express');
let app = require('express')();
const path = require('path')
let httpServer = require('http').createServer(app);
let io = require('socket.io')(httpServer);

let httpPort = 3001;
// 监听Redis消息队列, 获取服务端需要传递给客户端的数据
let redis = require("redis");
let subscriber = redis.createClient(6379, '127.0.0.1');
// 定义全局的对象, 频道名作为key对应该频道客户端的监听事件 channels[channelName] = receiveEvent
let channels = {}

// 建立连接
io.on('connection', function (socket) {
  console.log('public channel connected sid-->>' + socket.id);
  //监听join事件
  socket.on('join', function (data) {
    socket.join(data.channelName);
    //订阅频道
    subscriber.subscribe(data.channelName);
    channels[data.channelName] = data.receive;
  });
  // 监听leave事件
  socket.on('leave', function (roomName) {
    socket.leave(roomName);
  });
  // 断开连接
  socket.on('disconnect', function () {
    console.log(`disconnect`);
  });
});

// 监听Redis消息队列
subscriber.on("message", function (channel, message) {
  io.to(channel).emit(channels[channel], message);
});

app.use(express.static(path.join(__dirname, 'public')))

// 启动监听端口
httpServer.listen(httpPort, function () {
  console.log(`websocket server listening on *:${httpPort}`);
});
