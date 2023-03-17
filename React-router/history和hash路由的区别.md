 # history和hash路由的区别
 
 1. history和hash都是利用浏览器的两种特性实现前端路由，history是利用浏览历史记录栈的API实现，hash是监听location对象hash值变化事件来实现
 2. history的url没有’#'号，hash反之
 3. history需要后端配合，如果后端不配合刷新新页面会出现404，hash不需要