class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = new Node('head', null, null);
        this.tail = new Node('tail', this.head, null);
        this.head.next = this.tail;
        this.size = 0;
    }

    getLength() {
        return this.size;
    }

    get(index) {
        if (index < this.size / 2) {
            let current = this.head.next;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current.value;
        }

        let current = this.tail.prev;
        for (let i = this.size - 1; i > index; i--) {
            current = current.prev;
        }
        return current.value;

    }

    addFirst(value) {
        const newNode = new Node(value, this.head, this.head.next);
        newNode.next.prev = newNode;
        this.head.next = newNode;
        this.size++;
    }
    adllast(value) {
        const newNode = new Node(value, this.tail.prev, this.tail);
        newNode.prev.next = newNode;
        this.tail.prev = newNode;
        this.size++;
    }

    insert(index,value) {
        let current;
        if (index < this.size / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        }else{
            current = this.tail.prev.prev;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev;
            }
        }
        const newNode = new Node(value, current, current.next);
        newNode.next.prev = newNode;
        newNode.prev.next = newNode;
        this.size++;
    }

    removeFirst() {
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
        this.size--;
    }

    removeLast() {
        this.tail.prev = this.tail.prev.prev;
        this.tail.prev.next = this.tail;
        this.size--;
    }

    remove(index){
        let current;
        if (index < this.size / 2) {
            current = this.head.next;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        }else{
            current = this.tail.prev;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev;
            }
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size--;
    }


    printAll() {
        let current = this.head;
        while (current.next.value != 'tail') {
            console.log(current.next.value);
            current = current.next;
        }

    }

}

const test = () => {
    
    dll = new doublyLinkedList();
    
    
    dll.addFirst(1);
    dll.addFirst(0);
    dll.adllast(2);
    dll.adllast(3);
    dll.adllast(4);
    console.log('length', dll.getLength());
    dll.printAll();
    console.log('get 1', dll.get(1));
    console.log('get 4', dll.get(4));
    console.log('delete first');
    dll.removeFirst();
    dll.printAll();
    console.log('insert 1, 6');
    dll.insert(1,6);
    dll.printAll();
    console.log('insert 4,7');
    dll.insert(4,7);
    dll.printAll();
    console.log('delete index 1');
    dll.remove(1);
    dll.printAll();
    console.log('delete index 3');
    dll.remove(3);
    dll.printAll();
    console.log('delete last');
    dll.removeLast();
    dll.printAll();
}

test();
