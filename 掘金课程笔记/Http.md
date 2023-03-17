# 什么是Http协议
1.  超文本传输协议
2.  应用层 基于TCP协议
3.  请求和相应
4.  简单可扩展
5.  无状态

# http协议的发展
1. HTTP/0.9:1. 请求Get/mypage.html 2.响应只有HTML文档
2. HTTP/1.0:1. 增加了Header 2. 有了状态码 3. 支持多种文档类型
3. HTTP/1.1:1. 链接复用 2. 缓存 3. 内容协商
4. HTTP/2: 1. 二进制协议 2. 压缩Header 3. 服务器推送
5. HTTP/3：草案阶段


# HTTP协议分析-报文
1. 请求 ：Method Path Version
2. 响应：Version StatusCode StatusMessage

## Method：
1. Safe：不会修改服务器的数据的方法(get head options)
2. Idempotent(幂等)：同样的请求被执行一次与连续执行多次的效果是一样的，服务器状态也是一样的，所以所有safe方法都是Idempotent的（get head options put delete）
   
## 状态码


## RESTful API设计风格
1. 每一个URI代表一种资源
2. 客户端与服务器之间，传递这种资源的某种表现层
3. 客户端通过HTTP method，对服务器端资源进行操作，实现“表现层状态转换”


## 常用请求和响应头


## 缓存相关的请求头
强缓存 Expire

## 缓存判断顺序问题


## 服务器进行cookie的设置


## HTTP2概述
http2中的最小通信单位为帧而http1中的通信单位为文本，并且在传输的过程中运用的是二进制编码的方式加入新的压缩算法
使传输的效率更高

将一个文本拆为几个帧后并不需要按顺序发送
HTTP2的链接是永久的

控制流：阻止发送方向接受方发送大量数据的机制

服务器主动推送服务(当客户端主动向服务器端要一个html文件的时候服务器发现你可能还需要相应Html文件的样式文件和js文件会一起推送给你)


# HTTPS
1. 经过TSL/SSL加密


# 场景分析
1. 静态资源方案
    1. 缓存+CDN+文件名hash

2. 登录场景
    1. 表单登录
    2. 单点登录


# 鉴权方案
1. Session + cookie
2. JWT

# link标签网络优化
1. 预解析
2. 预链接

# 稳定性

