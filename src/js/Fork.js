import DisplayObject from "./DisplayObject";

export default class Fork extends DisplayObject {
  constructor(image) {
    super(image);
    this.init();
  }

  init() {
    //console.log("Fork.init();");
  }

  setup(scaleX, scaleY) {
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }

  updatePosition(x, y) {
    console.log("updatePosition");
    this.x = x - this.width / 2;
    this.y = y - this.height * 0.23;
    this.isChanged = true;
  }
}
