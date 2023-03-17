let findMinArray = function(array,target){
    let start = 0;
    let end = Infinity;
    let length = array.length;
    for(let i=0;i<length;i++){
        let sum = 0
        let index = i;
        while( sum < target || index < length){
            sum += array[index++]
            if(sum === target){
                [start,end] = (end - start) < (index - i) ? [start, end] : [i,index];

            }

        }
    }
    return array.slice(start,end);
}

console.log(findMinArray([1,4,4],4));