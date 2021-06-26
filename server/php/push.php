<?php
    $message = isset($argv[1]) ? $argv[1] : '';
    $channel = 'channelName1';

    if ($channel == '' || $message == '') {
      echo "Error: Channel or message value not null" . PHP_EOL;
      exit;
    }

    $host = '127.0.0.1';
    $port = 6379;
    $redis = new Redis();
    try {
      $redis->connect($host, $port);
    } catch (\Exception $e) {
      echo "Error: redis connect failed" . PHP_EOL;
      exit;
    }
    // 往消息队列发送消息
    $redis->publish($channel, $message);
