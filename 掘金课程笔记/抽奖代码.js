function pick(numbers,limit=numbers.length-1){
    const picked = Math.floor(Math.random() * limit);
    [numbers[picked],numbrs[limit]] = [numbrs[limit],numbers[picked]]
    return numbers[limit]
}