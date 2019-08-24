// Binary Search Tree
// 중복 불가능.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class Tree {
    constructor() {
        this.root = null;

    }

    insert(value) {
        if (this.find(value)) return console.log("이미 값이 존재합니다.");

        const newNode = new Node(value);
        if (!this.root) return this.root = newNode;

        return this._insert(newNode, this.root);
    }

    _insert(node, current) {
        node.parent = current;

        if (node.value < current.value) {
            if (current.left) return this._insert(node, current.left);
            return current.left = node;
        }

        if (current.right) return this._insert(node, current.right);
        return current.right = node;
    }

    find(value) {
        let current = this.root;

        while (current !== undefined) {
            if (!current) return null;

            if (current.value === value) return current;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    }

    erase(value) {
        const current = this.find(value);
        if (!current) return console.log("값이 존재하지 않습니다.");

        if (!current.right && !current.left) {
            if (value < current.parent.value) return current.parent.left = null;
            return current.parent.right = null;
        } else if (current.right && current.left) {
            let child = current.right;

            while(child.left){
                child = child.left;
            }

            current.value = child.value;
            if(child.parent === current) return child.parent.right = null;
            child.parent.left = null;
            return

        } else {
            if (current.left) {
                current.value = current.left.value;
                current.left = null;
                return; 
            }
            current.value = current.right.value;
            current.right = null;
            return;
        }

    }

    preorder(){
        console.log("preorder start");
        const current = this.root;
        this._preorder(current);
    }

    _preorder(node){
        console.log(node.value);
        if(node.left) this._preorder(node.left);
        if(node.right) this._preorder(node.right);
        return;
    }
    
    inorder(){
        console.log("inorder start");
        const current = this.root;
        this._inorder(current);
    }
    
    _inorder(node){
        if(node.left) this._inorder(node.left);
        console.log(node.value);
        if(node.right) this._inorder(node.right);
        return;
        
    }
    
    postorder(){
        console.log("postorder start");
        const current = this.root;
        this._postorder(current);
    }
    
    _postorder(node){
        if(node.left) this._postorder(node.left);
        if(node.right) this._postorder(node.right);
        console.log(node.value);
        return;
        
    }


}


const tree = new Tree();

addingArray = [6, 2, 1, 4, 3, 5, 7, 8, 9];
for (let val of addingArray) {
    tree.insert(val);
}
