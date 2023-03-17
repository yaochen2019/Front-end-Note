const fiber = {
    stateNode:App,
}
function schedule(){
    
}
function App(){
    const [num,updateNum] = useState(0);

    return {
        onClick(){
            updateNum(num+1);
        }
    }
}

 