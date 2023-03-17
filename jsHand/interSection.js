let arr1 = [1,2,3]
let arr2 = [3,4,5,6]

function interSection(arr1,arr2){
    let s1 = new Set(arr1)
    let s2 = new Set(arr2)
    let newArr = [...s1].filter((item, index)=>{
        return s2.has(item)
    })
    return newArr
}