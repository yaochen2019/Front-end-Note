# useState的异步同步问题
setState和 useState 只在合成事件如onClick等和钩子函数包括componentDidMount、useEffect等中是“异步”的，在原生事件和 setTimeout、Promise.resolve().then 中都是同步的

只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”

批量更新策略会对其进行覆盖，取最后一次的执行,类似于Object.assin的机制，如果是同时修改多个不同的变量的值，比如改变了a的值又改变了b的值，在更新时会对其进行合并批量更新，结果只会产生一次render