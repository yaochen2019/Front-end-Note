//1.利用stringify将js对象序列化，但是无法拷贝函数，symbol
let obj1 = {  a: 0,
    b: {
       c: 0
       }
  };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a = 1;
obj1.b.c = 1;
console.log(obj1); // {a: 1, b: {c: 1}}
console.log(obj2); // {a: 0, b: {c: 0}}


//2.深拷贝的手动实现
function deepCopy(object) {
    if (!object || typeof object !== "object") return;
  
    let newObject = Array.isArray(object) ? [] : {};
  
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObject[key] =
          typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
      }
    }
  
    return newObject;
  }
