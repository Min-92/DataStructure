// Binary Search Tree
// 중복 불가능.

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;

    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root) return this.root = newNode;
        
        return this._insert(newNode,this.root);
    }

    _insert(node,current){
        if(node.value < current.value){
            if(current.left) return this._insert(node,current.left);
            return current.left = node;
        }

        if(current.right) return this._insert(node,current.right);
        return current.right = node;
    }



}


const tree = new Tree();

addingArray = [6,2,1,4,3,5,7,8,9];
for(let val of addingArray){
    tree.insert(val);
}
