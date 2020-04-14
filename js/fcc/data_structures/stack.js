function Stack() {
  let collection = [];

  this.push = function (x) {
    return collection.push(x);
  };

  this.pop = function () {
    return collection.pop();
  };

  this.peek = function () {
    return collection[0];
  };

  this.isEmpty = function () {
    return collection.length < 1;
  };

  this.clear = function () {
    collection = [];
  };
}
