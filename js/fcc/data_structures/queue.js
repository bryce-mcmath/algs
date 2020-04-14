function Queue() {
  let collection = [];

  this.enqueue = function (x) {
    collection.push(x);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length < 1;
  };
}
