# css优化

1. 内联首屏css样式 ：在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联css关键代码能够使浏览器在下载完html后就能立刻渲染
而如果外部引用css代码，在解析html结构过程中遇到外部css文件，才会开始下载css代码，再渲染
所以，CSS内联使用使渲染时间提前

2. 资源的压缩，使用webpack对css进行压缩