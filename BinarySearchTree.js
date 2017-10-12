class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      //no head, create new head
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (true) {
      if (current.value > value) {
        //go left
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          break;
        }
      } else {
        //go right
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          break;
        }
      }
    }
  }
  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map(num => tree.add(num));
const objs = tree.toObject();
console.log(objs, nums);
