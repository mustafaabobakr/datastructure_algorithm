
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  // helper method which creates a new node to be inserted and calls insertNode.
  insert(data) {
    // Creating a node and initialising with data
    const newNode = new Node(data);
    // root is null then node will be added to the tree and made root.
    if (this.root === null) this.root = newNode;
    // root isn't null then, find the correct position in the tree and add the node.
    else this.insertNode(this.root, newNode);
  }
  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if (the newNode.data < is less than the node.data)
    // data move left of the tree.
    if (newNode.data < node.data) {
      // if left is null insert node here.
      if (node.left === null) node.left = newNode;
      // if left is not null recur until null is found.
      else this.insertNode(node.left, newNode);
    }

    // if (the newNode.data > is more than the node.data)
    // data move right of the tree.
    if (newNode.data > node.data) {
      // if right is null insert node here.
      if (node.right === null) node.right = newNode;
      // if right is not null recur until null is found.
      else this.insertNode(node.right, newNode);
    }
  }

  // search for a node with given data
  search(node = this.root, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node.data move left
    else if (data < node.data) return this.search(node.left, data);
    // if data is bigger than node.data move right
    else if (data > node.data) return this.search(node.right, data);
    // if data is === equal to the node.data return node
    else return node;
  }

  // helper method that calls the
  // removeNode with a given data
  remove(data) {
    // root is re-initialized with
    // root of a modified tree.
    return this.root = this.removeNode(this.root, data);
  }
  // Method to remove node with a given data
  // it recur over the tree to find the data and removes it
  removeNode(node, key) {
    // if the root is null then tree is empty
    if (node === null) return null;
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      }

      else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      const aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

}

const tree = new BinaryTree();
/* 
      9
  4      20
1   6  15  170
*/

tree.insert(9);

tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log('tree: ', traverse(tree.root));
console.log('search: ', tree.search(tree.root, 20));
console.log('remove: ', tree.remove(20));

function traverse(node) {
  if (!node?.data) return null;
  const tree = {
    data: node.data,
    left: null,
    right: null
  };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
