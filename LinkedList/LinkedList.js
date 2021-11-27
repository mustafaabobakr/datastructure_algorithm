/*
 implement Linked List Data Structure

 */

// Demo 5 --> 10 --> 15 --> null


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  // init class with one value pointing to null, then add
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  static findNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = head.next;
      counter++;
    }
    return currentNode;
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
  // o(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // o(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // o(n)
  insert(index, value) {
    // check params
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
    newNode.next = nodeAfter;
    this.length++;
    return this;
  }
  // o(n)
  remove(index) {
    this.length--;
    // if index <= 0 head
    if (index <= 0) {
      return this.head = this.head.next;
    }
    // if last index >= Node
    if (index >= this.length) {
      // get (last item -1) and make is's .next = null
      const beforeLastNode = this.findNode(this.length - 2);
      return beforeLastNode.next = null;
    }
    const nodeBefore = this.findNode(index - 1);
    const unwantedNode = nodeBefore.next;
    nodeBefore.next = unwantedNode.next;
    return this;
  }
  // o(n)
  reverse() {
    if (this.head.next === null) return this.head;
    let prev = null;
    let curr = this.head;
    while (curr) {
      const next = curr.next;
      // make each currNode "point" backward
      curr.next = prev;
      // move forward
      prev = curr;
      curr = next;
    }
    return prev;
  }
  //
}
