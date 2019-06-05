export default class Rectangle {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return `Rectangle(${this.x}, ${this.y}, ${this.width}, ${this.height})`;
  }
}
