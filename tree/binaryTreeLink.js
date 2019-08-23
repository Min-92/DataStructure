//완전 이진 트리 구현

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.addingQueue = [];
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.root) return this.root = newNode;

        let current;
        if (this.addingQueue.length) {
            current = this.addingQueue.shift();
        } else {
            current = this.root;
        }
        if (!current.left){
            this.addingQueue = [];
            return current.left = newNode;
        }

        if (!current.right) {
            this.addingQueue = [];
            return current.right = newNode;
        }

        this.addingQueue.push(current.left);
        this.addingQueue.push(current.right);

        return this.addNode(value);
    }

    preorder(){
        console.log("preorder start");
        const current = this.root;
        this.recursivePreorder(current);
    }

    recursivePreorder(node){
        console.log(node.value);
        if(node.left) this.recursivePreorder(node.left);
        if(node.right) this.recursivePreorder(node.right);
        return;
    }
    
    inorder(){
        console.log("inorder start");
        const current = this.root;
        this.recursiveInorder(current);
    }
    
    recursiveInorder(node){
        if(node.left) this.recursiveInorder(node.left);
        console.log(node.value);
        if(node.right) this.recursiveInorder(node.right);
        return;
        
    }
    
    postorder(){
        console.log("postorder start");
        const current = this.root;
        this.recursivePostorder(current);
    }
    
    recursivePostorder(node){
        if(node.left) this.recursivePostorder(node.left);
        if(node.right) this.recursivePostorder(node.right);
        console.log(node.value);
        return;
        
    }

}

const tree = new Tree();
const arr = ['a','b','c','d','e','f','g','h','i']

for(let val of arr){
    tree.addNode(val);
}

tree.preorder();
tree.inorder();
tree.postorder();