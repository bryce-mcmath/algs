class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  increment(index) {
    this[index]++;
    this[index] %= this.queue.length;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.increment('write');
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] !== null) {
      const item = this.queue.splice(this.read, 1, null)[0];
      this.increment('read');
      return item;
    }
    return null;
  }
}
