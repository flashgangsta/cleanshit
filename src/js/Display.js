import Rectangle from "./utils/Rectangle";
import MappingManager from "./utils/MappingManager";

export default class Display {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.init();
  }

  init() {
    //console.log("Display.init()");
    document.querySelector("body").append(this.canvas);
    this.resize();
  }

  resize() {
    //console.log("Display.resize()");
    this.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  drawPlayField(assetsLoader) {
    //console.log("Display.drawPlayField()");

    const background = assetsLoader.getImageByKey("background");
    const sortir = assetsLoader.getImageByKey("sortir");

    this.drawImage(background);
    //this.drawImage(sortir);
  }

  drawImage(img) {
    const imgRect = new Rectangle(0, 0, img.width, img.height);
    const canvasRect = new Rectangle(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    MappingManager.setScaleFillArea(imgRect, canvasRect);
    MappingManager.alignToCenter(imgRect, canvasRect);

    this.ctx.drawImage(
      img,
      imgRect.x,
      imgRect.y,
      imgRect.width,
      imgRect.height
    );
  }
}
