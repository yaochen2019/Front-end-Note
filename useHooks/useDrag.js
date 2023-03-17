import { func } from 'prop-types';
import React, { useLayoutEffect } from 'react'
//手机端的touch拖拽Hooks
export default function useDrag() {
    //dom元素的位置
    const positionRef = useRef({
        currentX:0,currentY:0,//当前位置
        lastX:0,lastY:0//上一次的位置

    });
    //让哪个dom元素移动
    const domRef = useRef(null)
    const [,forceUpdate] = useState({})
    //对Dom的操作建议放在useLayoutEffect
    useLayoutEffect(()=>{
        //拖拽开始的坐标
        let startX,startY;
        const start = function(event){
            const {clientX,clientY} = event.targetTouches[0]
            startX = clientX;
            startY = clientY
            domRef.current.addEventListener("touchmove",move)
            domRef.current.addEventListener("touchend",end)
        }
        const move = function(event){
            const {clientX,clientY} = event.targetTouches[0]
            positionRef.current.currentX = positionRef.current.lastX+(clientX-startX)
            positionRef.current.currentY = positionRef.current.lastY+(clientY-startY)
            forceUpdate[{}]

        }
        const end = function(event){
            positionRef.current.lastX = positionRef.current.currentX
            positionRef.current.lastY = positionRef.current.currentY
            domRef.current.removeEventListener("touchmove",move)
            domRef.current.removeEventListener("touchend",end)
        }
        domRef.current.addEventListener('touchstart',start)
    },[])
    
    let style = {x:positionRef.current.currentX,y:positionRef.current.currentY}
  return [style,domRef]
}
