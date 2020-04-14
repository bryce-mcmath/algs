class Set {
  constructor() {
    this.collection = [];
  }

  has(el) {
    return this.collection.indexOf(el) !== -1;
  }

  values() {
    return this.collection;
  }

  add(el) {
    if (!this.has(el)) {
      this.collection.push(el);
      return true;
    }

    return false;
  }

  remove(el) {
    const i = this.collection.indexOf(el);

    if (i !== -1) {
      this.collection.splice(i, 1);
      return true;
    }

    return false;
  }

  size() {
    return this.collection.length;
  }
}
