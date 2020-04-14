var Map = function () {
  this.collection = {};

  this.add = function (k, v) {
    this.collection[k] = v;
  };

  this.remove = function (k) {
    delete this.collection[k];
  };

  this.get = function (k) {
    return this.collection[k];
  };

  this.has = function (k) {
    return this.collection.hasOwnProperty(k);
  };

  this.values = function () {
    return Object.values(this.collection);
  };

  this.size = function () {
    return Object.keys(this.collection).length;
  };

  this.clear = function () {
    this.collection = {};
  };
};
