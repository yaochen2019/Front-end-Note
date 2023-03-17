
//中序遍历
const inorderTraversal = function(root){
    const res = []
    const preorder = (root) => {
        if(!root) return;

        //前序遍历左子树
        preorder(root.left)

        //记录根节点的值
        res.push(root.val)

        //前序遍历右子树
        preorder(root.right)

    }
    preorder(root);

    return res;
}




//前序遍历
const formerTraversal = function(root){
    const res = []
    const preorder = (root) => {
        if(!root) return;
         //记录根节点的值
        res.push(root.val)


        //前序遍历左子树
        preorder(root.left)

       

        //前序遍历右子树
        preorder(root.right)

    }
    preorder(root);

    return res;
}

//后序遍历
const laterTraversal = function(root){
    const res = []
    const preorder = (root) => {
        if(!root) return;

        


        //前序遍历左子树
        preorder(root.left)

        //前序遍历右子树
        preorder(root.right)

         //记录根节点的值
         res.push(root.val)

    }
    preorder(root);

    return res;
}