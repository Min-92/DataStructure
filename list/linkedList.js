class Node {
    constructor(item,next){
        this.item = item;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = new Node('head', null);
    }

    addFirst(item){
        this.head.next = new Node(item, this.head.next);
    }
    addLast(item){
        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = new Node(item, null);
    }

    printAll(){
        let current = this.head;
        while(current.next){
            console.log(current.next.item);
            current = current.next;
        }
    }

    insert(index, item) {
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        current.next = new Node(item,current.next);
    }

    del(index){
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        
        current.next = current.next.next;
    }

    size(){
        let count = 0;
        let current = this.head;
        while(current.next){
            count++;
            current = current.next;
        }
        return count;
    }
}


const test = () => {
    sll = new linkedList();

    sll.addFirst(4);
    sll.addFirst(3);
    sll.addFirst(2);
    sll.addFirst(1);

    sll.addLast(5);
    sll.addLast(6);

    sll.insert(3,7);
    sll.printAll();
    console.log('delete');
    sll.del(3);
    sll.printAll();
    console.log('size');
    console.log(sll.size());
}

test();

