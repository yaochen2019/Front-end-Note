function lengthOfLongestSubstring(s){
    let window = new Set();
    let right = 0 ,res = 0;
    for(let left=0;left<s.length;left++){
        if(left!==0) window.delete(s[left-1]);
        while(right <s.length && !window.has(s[right])){
            window.add(s[right]);
            right++;
        }
        res = Math.max(res,right-left)
    }
    return res
}