/* 输入：strs = ["flower","flow","flight"]
输出："fl" */


var longestCommonPrefix = function(strs) {
    let minLength = strs[0].length;
    let res = [];
    strs.forEach(item=>{
        if(item.length<minLength){
            minLength = item.length
        }
    })
    for(let i=0;i<minLength;i++){
        for(let j=0;j<strs.length-1;j++){
            if(!(strs[j][i]===strs[j+1][i])){
                return res.join("")
            }
        }
        res.push(strs[0][i]);
    }
    return res.join("")
};