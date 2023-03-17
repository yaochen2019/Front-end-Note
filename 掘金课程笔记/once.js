function once(fn){
    return function(...args){

        if(fn){
            const ret = fn.apply(this,args)
            fn=null
            return ret
        }

    }
}