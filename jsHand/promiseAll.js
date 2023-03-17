function myAll(promiseArray){

    return new Promise((resolve,reject)=>{
        let result = []
        let resolveCount = 0;
        for(let i=0;i<promiseArray.length;i++){
            promiseArray[i].then(res => {
                result.push(res)
                resolveCount++;
                if(resolveCount === promiseArray.length){
                    resolve(result)
                } 
            }).catch(err=>{
                reject(err)
            })
        }  

    })

}


// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})

myAll([p3, p1, p2]).then(res=>{
    console.log(res);
})