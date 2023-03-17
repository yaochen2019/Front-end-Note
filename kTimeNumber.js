let kTimeNumber = function(array,k){
    let map = new Map()
    for(let i=0;i<array.length;i++){
        if(map.has(array[i])){
            map.set(array[i],map.get(array[i])+1)
        } else {
            map.set(array[i],1)
        }
    }
    let arrayMap = [...map]
    arrayMap.sort((a,b)=>{
        if(a[1]>b[1]){
            return -1;
        } else {
            return 1;
        }
    })
    return arrayMap;
}
console.log(kTimeNumber([1,1,1,2,2,3]));