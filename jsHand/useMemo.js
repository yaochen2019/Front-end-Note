
let myUseMemo = function(fn,array){
    let lastArray = useRef({
        newArray:[],
        oldArray:[]
    })
    lastArray.current.oldArray = lastArray.current.newArray
    lastArray.current.newArray = array
    let result = useRef(null)
    let validArray = lastArray.current.newArray.length === lastArray.current.oldArray && lastArray.current.oldArray.filter(t => !lastArray.current.newArray.length.includes(t));
    if(validArray.length){
        return result;
    } else {
        result = fn()
        return result;

    }
    
} 