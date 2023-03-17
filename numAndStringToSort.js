
let n = 4;
let high = [176,170,176,176]
let users = ['john','Mary','jeter','Sara']

//排序
let map = new Map()
for(let i=0;i<n;i++){
    map.set(users[i],high[i])

}

let res = [...map].sort((a,b)=>{
    if(a[1]>b[1]){
        return 1;
    } else if(a[1] === b[1] && a[0] > b[0]){
        return 1;
    }else {
        return -1;
    }
})

let result = []

res.forEach(item => result.push(item[0]))
console.log(result.join(" "));