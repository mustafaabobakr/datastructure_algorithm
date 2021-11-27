
// Stacks => done by Array or LinkedList
/*
 Google
 Udemy
 Youtube
*/
class Node {
  constructor(val = null, next = null) {
    this.value = val;
    this.next = next;
  }
}

class Stack {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // 1- catch all Nodes
      const currentTopNode = this.top;
      // 2- make top = newNode...
      this.top = newNode;
      // 3- attach holded Nodes to new top
      this.top.next = currentTopNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) return this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  peak() {
    return this.top;
  }
  isEmpty() {
    return !this.top ? true : false;
  }
}

class StackArray {
  constructor(value) {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
  }
  peak() {
    return this.array[this.array.length - 1]
  }
  pop() {
    return this.array.pop();
  }
}

const myStack = new Stack();
myStack.push('bottom Node').push('middle Node').push('Top Node').push('latest');
console.log('push:', myStack);
console.log('myStack.peak():', myStack.peak())
console.log('====================================');
// myStack.pop();
// console.log('pop:', myStack);
console.log('====================================');




// Queues => done by Linked List ONLY avoid array o(n) shift\unshift,
// FIFO => First In Last Out
/*
 Head                Tail
 Mostafa -- Mazen -- Mohab

*/

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peak() {
    if (!this.first) return null;
    return this.first;
  }
  // appending to tail of linked list
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  // remove head from linked list which is here in Queue called first
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}
class QueueWithStack {

}

// const queue = new Queue();
// queue.enqueue('first');
// queue.enqueue('second');
// queue.enqueue('third');
// console.log('====================================');
// console.log('enqueue', queue);
// console.log('====================================');
// console.log('peak =>', queue.peak());
// console.log('====================================');
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log('dequeue =>', queue);
// console.log('====================================');

