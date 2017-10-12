class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const node = this.head;
      this.head = this.tail = null;
      return node.value;
    }
    const penultimate = this._find(null, (value, nodeValue, i, current) => current.next === this.tail);
    const ans = penultimate.next.value;
    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
    return ans;
  }
  _find(value, test = this.test) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
  get(index) {
    const node = this._find(index, this.testIndex);
    if (!node) return null;
    return node.value;
  }
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
      }
      this.length--;
      return head.value;
    }

    const node = this._find(index - 1, this.testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;
    if (!node.next.next) this.tail = node.next;
    this.length--;
    return excise.value;
  }
  test(search, nodeValue) {
    return search === nodeValue;
  }
  testIndex(search, __, i) {
    return search === i;class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }
      
      class LinkedList {
        constructor() {
          this.tail = null;
          this.head = null;
          this.length = 0;
        }
          
        push(value) {
      
            const node = New Node(value);
            this.length++;
      
            if (!this.head) {
                this.head =  node;
            } else { 
                this.tail.next=node
            }
        }
        pop() {
           
            return this.delete(this.length - 1);
        }
        _find(value, test = this._test) { 
            let current = this.head;
            let i = 0;
            while (current) { 
                if (test(value, current.value, i, current)) { 
                    return current;
                }
                current = current.next;
                i++;
                return null;
            }
        }
        _test(a, b) {
            return a === b;
        }
        get(index) { 
            const node = this._find(index, this._testindex);
            if (!node) return null;
            return node.value;
        }
        _testindex(search, __, i)  { 
          return search === i;
        }
        delete (index) {
            if (index === 0) { 
                const head = this.head;
                if (head) { 
                    this.head = head.next
                } else {
                this.head=this.tail = null;
                }
                this.length--;
                return head.value;
            }
            const node = this._find(index - 1, this._testindex);
            const excise = node.next;
            if (!excise) return null;
            node.next = excise.next;
            if (node.next && !node.next.next) this.tail = node.next;
            this.length--;
            return excise.value;
         }
      }
      
  }
  serialize() {
    const ans = [];
    let current = this.head;
    if (!current) return ans;
    while (current) {
      ans.push(current.value);
      current = current.next;
    }
    return ans;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
