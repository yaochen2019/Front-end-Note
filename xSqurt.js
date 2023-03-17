function  xSqurt(x){
    let prev = 0
    for(let num=0;num<(x/2);number++){
        if(num * num === x){
            return number;
        } else if(num * num >x) {
            return prev
        } else {
            prev = num;
        }
    }
}