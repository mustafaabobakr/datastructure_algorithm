/*
 implement Linked List Data Structure

 */

// Demo 5 --> 10 --> 15 --> null


class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  // init class with one value pointing to null, then add
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  findNode(index) {
    let counter = 0;
    let currNode = this.head;
    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }
  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const nodeBefore = this.findNode(index - 1);
    const nodeAfter = nodeBefore.next;

    nodeBefore.next = newNode;
    newNode.prev = nodeBefore;
    newNode.next = nodeAfter;
    nodeAfter.prev = newNode;
    this.length++;
    return this;
  }
  remove(index) { // 3
    if (index <= 0) {
      this.length--;
      return this.head = this.head.next;
    }
    if (index >= this.length) {
      const beforeLastNode = this.tail.prev;
      this.length--;
      return beforeLastNode.next = null;
    }
    const nodeBefore = this.findNode(index - 1); // 2
    const unwantedNode = nodeBefore.next; // 3
    console.log('unwantedNode:', unwantedNode);
    nodeBefore.next = unwantedNode.next; // 2 -> 4
    this.length--;
    return this;
  }
}

const myLink = new DoublyLinkedList(2);
myLink.prepend(1);
myLink.append(3);
myLink.append(5);
myLink.insert(3, 4);
console.log('insert', myLink);
console.log('insert printList: ', myLink.printList());

console.log('====================================');
myLink.remove(99);
console.log('remove', myLink);
console.log('remove printList: ', myLink.printList());
console.log('====================================');

