class Node {
    constructor(value, index) {
        this.value = value;
        this.index = index;
        this.leftIndex = index*2+1;
        this.rightIndex = index*2+2;
        this.parentIndex = index-1 < 0 ? null : (index-1)/2;
    }

}

class Tree {
    constructor() {
        this.contents = [];
        this.root = null;

    }

    addNode(value){
        const index = this.contents.length;
        const newNode = new Node(value,index);
        this.contents.push(newNode);

        if(index === 0) return this.root = newNode;
        return newNode;
    }

    preorder(){
        console.log("preorder start");
        const current = this.root;
        this.recursivePreorder(current);
    }

    recursivePreorder(node){
        const left = this.contents[node.leftIndex];
        const right = this.contents[node.rightIndex];

        console.log(node.value);

        if(left) this.recursivePreorder(left);
        if(right) this.recursivePreorder(right);
        return;
    }

    inorder(){
        console.log("inorder start");
        const current = this.root;
        this.recursiveInorder(current);
    }
    
    recursiveInorder(node){
        const left = this.contents[node.leftIndex];
        const right = this.contents[node.rightIndex];

        if(left) this.recursiveInorder(left);
        console.log(node.value);
        if(right) this.recursiveInorder(right);
        return;
        
    }

    postorder(){
        console.log("postorder start");
        const current = this.root;
        this.recursivePostorder(current);
    }
    
    recursivePostorder(node){
        const left = this.contents[node.leftIndex];
        const right = this.contents[node.rightIndex];

        if(left) this.recursivePostorder(left);
        if(right) this.recursivePostorder(right);
        console.log(node.value);
        return;
        
    }



}


const tree = new Tree();

const arr = [1,2,3,4,5,6,7];

for(let val of arr){
    tree.addNode(val);
}

tree.preorder();
tree.inorder();
tree.postorder();
