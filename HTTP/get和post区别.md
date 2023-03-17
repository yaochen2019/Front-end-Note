# 从HTTP协议的角度来说
参数：get通过url进行传递，post放在request body中

安全：get由于直接将参数暴露在url中，所以不能用来传递敏感信息，而post请求就不会有这个问题

编码：get只能进行url编码，而post支持多种编码合适

速度：由于get的data都在url里面所以速度较快（如果在网络环境好的情况下和这个差距可以忽略，反而在网络环境差的情况下两次TCP在验证数据的完整性上，有更大的优点）

缓存：get请求可以被浏览器缓存，post请求不会被浏览器缓存

数据包：get由于data都在url里面，所以只会产生一个TCP数据包（header和data）。由于post将数据放在request body中，所以会产生两个TCP数据包（一个是header数据包，另一个是data数据包）




# POST请求体的类型
form-data x-www-form-urlencoded raw binary
