import DisplayObject from "./DisplayObject";
import MappingManager from "./utils/MappingManager";

export default class Sortir extends DisplayObject {
  constructor(image) {
    super(image);
    this.init();
  }

  init() {
    //console.log("Sortir.init();");
  }

  setup(displayRect) {
    MappingManager.setScale(this.rect, displayRect.width, displayRect.height);
    MappingManager.alignToCenter(this.rect, displayRect);
  }
}
