
function compose(...funcs) {
    if (funcs.length === 0) {
      return (arg) => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce((a, b) => (...args) => a(b(...args)))

}


function a(number){
    return number +2
}
function b(number){
    return number 
}
let arr = [a,b]
let res = compose(...arr)
console.log(res(3));