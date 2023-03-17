import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    setInterval(function log() {
      console.log(`Count is: ${count}`);
    }, 2000);
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WatchCount />, rootElement);
/* 
组件安装后，useEffect()调用 setInterval(log, 2000)计时器函数，该计时器函数计划每2秒调用一次log()函数。 在这里，闭包log()捕获到count变量为0。

以后，即便在单击Increase按钮时count增长，计时器函数每2秒调用一次的log()，使用count的值仍然是0。log()成为一个过期的闭包 */