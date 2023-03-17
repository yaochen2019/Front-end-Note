/* let timeStamp = function(time,string){
    let date = new Date(time)
    let year = date.getFullYear()
    let Month = date.getMonth()
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let yearReg = /yyyy/g
    let MonthReg =/MM/g 
    let datReg = /dd/g
    let hoursReg = /HH/g
    let minutesReg = /mm/g
    let secondsReg = /ss/g
    string = string.replace(yearReg,year.toString())
    string = string.replace(MonthReg,Month.toString())
    string = string.replace(datReg,day.toString())
    string = string.replace(hoursReg,hours.toString())
    string = string.replace(minutesReg,minutes.toString())
    string = string.replace(secondsReg,seconds.toString())
    
    return Month;
}

console.log(timeStamp(1660653659557,"yyyy年MM月dd日-HH:mm:ss")); */


/* let findId = function(personNum,time){
    let persons = []
    
    let currentIndex = 0
    for(let i=0;i<personNum;i++){
            persons.push(i)
    }

    while(persons.length > 1){
        if(currentIndex + time >persons.length - 1 ){
            currentIndex = (currentIndex+time) % (persons.length - 1)
        } else {
            currentIndex += time
        }
         
        let remove = persons.splice(currentIndex,1)
        
    }
    return persons[0]
}
console.log(findId(3,2)); */


let a = [1,2,3,4]
let b = [5,6,7]
a = []

console.log(a.length);

let kernelRow = parseInt(tokens[0][2])
let kernelCol = parseInt(tokens[0][3])
let array = Array.from(new Array(arrayRow),()=> new Array(arrayCol).fill(0))
for(let i=0;i<arrayRow;i++){
    for(let j=0;j<arrayCol;j++){
        array[i][j] = tokens[1+i][j]
        
    }
}