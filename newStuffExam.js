/* 共25道试题依次是10道单选题每个2分 10道判断题每个4分 5道大题每个8分
考试只能按顺序作答答对才能得到相应的分数，如果答错题目累积3题则终止考试开始算分
请根据给定的分数，计算所有得到分数的答题可能 */

/* 输入：94
输出：100 */


let newStuffExam = function(score){
    let grades = [];
    for(let i=0;i<10;i++) grades.push(2);
    for(let i=0;i<10;i++) grades.push(4);
    for(let i=0;i<5;i++) grades.push(8);
    function dfs(index,restScore,count,grades){
        if(count ===0) return restScore === 0?1:0;
        if(restScore === 0 ) return 1;
        if(index>=grades.length) return 0;
        return dfs(index+1,restScore,count-1,grades) + dfs(index+1,restScore-grades[index],count,grades)

    }

    return dfs(0,score,3,grades)
}

console.log(newStuffExam(100));