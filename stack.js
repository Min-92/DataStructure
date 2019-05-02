class Stack {
    constructor() {
        this.stack = [];
    }
    push(item){
        this.stack.push(item);
    }
    pop(){
        return this.stack.pop();
    }
    size(){
        return this.stack.length;
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    isEmpty(){
        return this.stack.length === 0 ? true : false;
    }

}

const test = () => {
    const stack = new Stack;

    
    stack.push(1);
    stack.push(2);
    console.log(stack.size());
    console.log(stack.pop());
    console.log(stack.size());
    stack.push(3);
    console.log(stack.peek());
    console.log(stack.isEmpty());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.isEmpty());


}

test();