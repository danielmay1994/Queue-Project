// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.front = newNode;
      this.back = newNode;
    } else if (this.length >= 1) {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    let removed = this.front;

    if (!this.length) {
      return null;
    }
    if (this.length === 1) {
      this.back = null;
      this.front = null;
    }
    if (this.length >= 2) {
      this.front = this.front.next;
    }
    this.length--;
    return removed.value;
  }
  size() {
    if (this.length === 0) {
      return 0;
    } else if (this.length === 2) {
      return 2;
    } else if ((this.length += 2 && this.length--)) {
      return 1;
    }
  }
}

exports.Node = Node;
exports.Queue = Queue;
