function PriorityQueue() {
  this.collection = [];

  this.printCollection = function () {
    console.log(this.collection);
  };

  const getInsertionIndex = (pri) => {
    for (let i = this.collection.length; i > 0; i--) {
      if (this.collection[i - 1] && this.collection[i - 1][1] <= pri) {
        return i;
      }
    }

    return 0;
  };

  this.enqueue = function (x) {
    this.collection.splice(getInsertionIndex(x[1]), 0, x);
  };

  this.dequeue = function () {
    return this.collection.shift()[0];
  };

  this.front = function () {
    return this.collection[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.isEmpty = function () {
    return this.collection.length < 1;
  };
}
