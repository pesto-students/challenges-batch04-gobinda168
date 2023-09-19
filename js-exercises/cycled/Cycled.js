/* eslint-disable class-methods-use-this */
class Cycled {
  constructor(arr) {
    this.array = [...arr];
    this.head = 0;
    this.len = this.array.length;
  }

  current() {
    return this.array[this.head];
  }

  next() {
    this.head += 1;
    [Symbol.iterator].next();
    return this.array[this.head % this.len];
  }

  previous() {
    this.head -= 1;
    const range = this.head % this.len;
    return this.array[range !== 0 ? this.len + range : 0];
  }

  step(value) {
    this.head += value;
    this.head %= this.len;
    return this.array[this.head];
  }

  * [Symbol.iterator]() {
    for (const element of this.array) yield element;
  }

  reversed() {
    return this.array.reverse()[Symbol.iterator]();
  }

  indexOf(value) {
    return this.array.indexOf(value);
  }

  get index() {
    return this.head;
  }

  set index(value = 0) {
    if (value > -1 && value < this.len) this.head = value;
    else this.head = (Math.abs(value) + 1) % this.len;
  }
}
export { Cycled };
