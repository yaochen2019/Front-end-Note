


# cookie的使用和一些常用属性
Set-cookie：token=abcd;

# 和http头一样的expire和Max-Age

# path 设置cookie的路径作用域


# Domain 设置cookie的domain作用域
在不设置domain的时候，会使用请求的时候的domain

# Secure
即请求必须为https，cookie才会被保存

# SameSite
cookie在跨域的时候是否应该被发送
SameSite属性可以让 Cookie 在跨站请求时不会被发送，从而阻止了跨站请求伪造攻击（CSRF）。它有三个属性值
1. Strict 完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。
2. Lax 允许部分第三方请求携带 Cookie。(这个是chrome的默认值)
3. None 无论是否跨站都会发送 Cookie。 

以前呢，SameSite的默认值是None， 即当前页面嵌入其他第三方页面（iframe）、POST请求、Ajax都可以携带第三方的Cookie