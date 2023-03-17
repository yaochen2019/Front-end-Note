let arr1 = [1,2,3,3]
let arr2 = [4,5,6,3,2,4,9]


function union(arr1,arr2){
    let set = new Set([...arr1,...arr2])
    console.log(new Array(...set));
}

union(arr1,arr2)