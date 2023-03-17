var leastInterval = function(tasks, n) {
    let res = 0;
    if(n === 0) return tasks.length;
    let map = new Map();
    for(let task of tasks) {
        map.set(task, map.has(task) ? map.get(task) + 1 : 1);//计数
    }
    let arr = [...map.values()].sort((a, b) => {return b - a});//降序
    let len = arr.length;
    res = (arr[0] - 1) * (n + 1) + 1;
    let cur = 1;
    let equalNum = 0;
    while(arr[cur] === arr[0] && cur <= len - 1) {
        equalNum++;//找和arr[0]次数相等的任务种数
        cur++;
    } 
    return Math.max(res + equalNum, tasks.length);//选最大的值
};

console.log(leastInterval(["A","A","A","A","B","B","B"],2));