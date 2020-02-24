import DisplayObject from "./DisplayObject";

export default class Dirt extends DisplayObject {
  constructor(image) {
    super(image);
    this.init();
  }

  init() {
    //console.log("Dirt.init();");
  }

  setup(x, y, scaleX, scaleY) {
    this.x = x + 70 * scaleX;
    this.y = y + 95 * scaleY;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
}
