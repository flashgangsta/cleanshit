import DisplayObject from "./DisplayObject";
import MappingManager from "./utils/MappingManager";

export default class Background extends DisplayObject {
  constructor(image) {
    super(image);
    this.init();
  }

  init() {
    //console.log("Background.init();");
  }

  setup(displayRect) {
    MappingManager.setScaleFillArea(this.rect, displayRect);
    MappingManager.alignToCenter(this.rect, displayRect);
  }
}
