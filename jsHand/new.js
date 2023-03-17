/* 
1. 它创建了一个新对象
2. 将新对象的  __proto__(隐式原型)  指向构造函数的  prototype (显式原型)
3. 它将this绑定到了新对象上
4. 返回这个新对象 */
// const xxx = _new(Foo,'哈哈',123)  ==> new Foo('哈哈',123)
function _new(fn){
  // 1 获取除fn以外的所有arguments 
  // 使用slice删除arguments第一个元素就得到其他arguments
  const args = Array.prototype.slice.call(arguments,1); // ['哈哈',123]
  // 新建一个对象 用于函数变对象
  const newObj = {};
  // 原型链被赋值为原型对象
  newObj.__proto__ = fn.prototype;
  // this 指向新对象 
  fn.apply(newObj, args);
  // 返回这个新对象
  return newObj;
}

//new函数主要用于创建一个给定构造函数的实例对象