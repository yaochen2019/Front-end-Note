
//声明式的代码
function troggle(...actions){

    return function(...args){
        let action = actions.shift()
        actions.push(action)
        return action.apple(this,args)
    }
}

switcher.onclick = troggle(
    e=>e.target.className = "off",
    e=>e.target.className = "on"
)

//命令式的代码
switcher.onclick = function(e){
    if(e.target.className === "on"){
        e.target.className = "off"
    } else {
        e.target.className = "on"
    }
}