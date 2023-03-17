const traffic = document.getElementById("traffic")

const stateList = [
    {state:"wait",last:1000},
    {state:"stop",last:3000},
    {state:"wait",last:3000},

]


function start(traffic,stateList){
    function applyState(stateIndex){
        const {state,last} = stateList[stateIndex];
        traffic.className = state;
        setTimeout(()=>{
            applyState((stateIndex+1)%stateList.length);
        },last)
    }
    applyState(0)
}

start(traffic,stateList) 