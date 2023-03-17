let money = function(personal,moneyArr,totalMoney){
    moneyArr.sort((a,b)=>b-a);
    let result = []
    for(let i=0;i<personal;i++){
        let total = totalMoney;
        let baseNum = moneyArr[i]
        let personalSameMoney = 1;
        for(let j=i+1;j<personal;j++) {
            if(total-(baseNum-moneyArr[j])>=0){
                total -= (baseNum-moneyArr[j]);
                personalSameMoney++;

            } else {
                result.push([personalSameMoney,total])
                break;
            }
            if(j===personal-1){
                result.push([personalSameMoney,total])
            }
        }
    }
    result.sort((a,b)=>{
        if(a[0]>b[0]){
            return 1;
        } else if(a[0]===b[0] && a[1]<b[1]){
            return 1;
        } else {
            return -1;
        }
    })
    return result
    
}

console.log(money(5,[2,9,3,1,6],4));