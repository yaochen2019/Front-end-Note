function maxSubSum(array){
    let tempSum = 0;
    let Sum = 0;
    for(let i =0;i<array.length;i++){
        if(tempSum>0){
            tempSum+=array[i]
        }else {
            tempSum = array[i];
        }
        Sum = Math.max(Sum,tempSum)
    }

    
    return Sum

}

console.log(maxSubSum([-2,-5,-3,4,-1,2,1,-5,4]));