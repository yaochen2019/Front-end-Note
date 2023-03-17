# nodejs应用场景
1. 前端工程化
   1. 打包：webpack vite esbuild parcel
   2. 
2. Web服务端应用
3. Electron跨端桌面应用


# nodejs运行结构
1. V8：JavaScript runtime
2. libuv：eventloop syscall
3. inspector：nodejs的调试工具

4. 异步I/O
5. 单线程
6. 跨平台
7. 可以使用worker_thread起独立线程，每个线程模型没有太大变化

优点：不用考虑多线程同步问题，也就不需要锁
缺点：阻塞会产生更多的负面影响，延迟比较敏感的不能用单线程来做

# 编写Http Server
CDN:缓存 + 加速
分布式存储。容灾

# 延申话题

SSR特点

优点：避免重复编写代码
首屏更快SEO友好

缺点：qps较低
前端代码编写的时候要考虑服务端渲染


部署要解决的问题
1. 守护进程PM2
2. 多进程：cluster便捷的利用多进程
3. 记录进程的状态