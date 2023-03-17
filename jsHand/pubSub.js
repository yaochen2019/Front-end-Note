class pubSub {
    constructor(){
        this.list = {}
    }
    emit(name,...args){
        let eventName = this.list[name]
        eventName.forEach(fn=>{
            fn.apply(this,args)
        })
    }
    on(name,callback){
        let fn = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn

    }
}