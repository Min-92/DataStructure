// Binary Search Tree
// 중복 불가능.

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

    }

    insert(value) {
        if(this.find(value)) return console.log("이미 값이 존재합니다.");

        const newNode = new Node(value);
        if (!this.root) return this.root = newNode;

        return this._insert(newNode, this.root);
    }

    _insert(node, current) {
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
            if(!current) return null;

            if (current.value === value) return current;

            if (value < current.value) {
                current = current.left;
            }else{
                current = current.right;
            }
        }

        return null;
    }



}


const tree = new Tree();

addingArray = [6, 2, 1, 4, 3, 5, 7, 8, 9];
for (let val of addingArray) {
    tree.insert(val);
}

tree.insert(8);
console.log(tree.find(7));