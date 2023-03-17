const loadImg = urlId =>{
    const url = `http://www.image.com${urlId}`
    return new Promise((resolve, reject)=>{
        const img = new Image()
        img.onerror = function(){
            reject(urlId)
        }
        img.onload = function(){
            resolve(urlId)
        }
        img.src = url
    })

}




[1,2,3,4,5].reduce((prev,current)=>{
    return prev.then(()=>{loadImg(current)})
},Promise.resolve())