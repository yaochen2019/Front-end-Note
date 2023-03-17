# 渲染过程


# 提交阶段
React 在提交阶段更新了 DOM 之后，它会相应地更新所有 ref 以指向请求的 DOM 节点和组件实例。然后它同步运行componentDidMount和componentDidUpdate类生命周期方法和useLayoutEffect钩子



# Diff算法
第一遍遍历
在本轮遍历中，会遍历A - B - D - C。A和B都是key没变的节点，可以直接复用，但当遍历到D时，发现key变化了，跳出当前遍历。例子中A 和 B是自身发生更新的节点，后面的D 和 C我们看到它的位置相对于oldFiber链发生了变化，会往下走到处理移动节点的循环中


节点删除
因为遍历的是newChildren，当它遍历结束，但oldFiber链还没有遍历完，那么说明剩下的节点都要被删除。直接在oldFiber节点上标记Deletion的effectTag来实现删除


节点移动
如果旧位置在lastPlacedIndex的右边，说明这个节点位置不变。
原因是旧位置在lastPlacedIndex的右边，而新节点的位置也在它的右边，所以它的位置没变化。因为位置不变，所以它成了固定节点，把lastPlacedIndex更新成新位置。
如果旧位置在lastPlacedIndex的左边，当前这个节点的位置要往右挪。
原因是旧位置在lastPlacedIndex的左边，新位置却在lastPlacedIndex的右边，所以它要往右挪，但它不是固定节点。此时无需更新lastPlacedIndex
