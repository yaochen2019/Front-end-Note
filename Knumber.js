function kNmuber(array,k){
    for(let i=array.length-1;i>array.length-k-1;i--){
        for(let j=0;j<i;j++){
            if(array[j]>array[i]){
                [array[j],array[i]] = [array[i],array[j]]
            }
        }
    }
    return array[array.length - k]

}

console.log(kNmuber([3,2,1,5,6,4],2));