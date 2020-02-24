import Rectangle from "./utils/Rectangle";
import Background from "./Background";
import Sortir from "./Sortir";
import Dirt from "./Dirt";
import Fork from "./Fork";

export default class Display {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.rectangle = new Rectangle(0, 0, this.canvas.width, this.canvas.height);
    this.fork = null;
    this.dynamicDisplayObjectsList = [];
    this.displayObjectsList = [];
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
    this.rectangle = new Rectangle(0, 0, this.canvas.width, this.canvas.height);
  }

  drawPlayField(assetsLoader) {
    //console.log("Display.drawPlayField()");

    const background = new Background(assetsLoader.getImageByKey("background"));
    const sortir = new Sortir(assetsLoader.getImageByKey("sortir"));
    const dirt = new Dirt(assetsLoader.getImageByKey("dirt"));

    this.fork = new Fork(assetsLoader.getImageByKey("fork"));

    background.setup(this.rectangle);
    sortir.setup(this.rectangle);
    dirt.setup(sortir.x, sortir.y, sortir.scaleX, sortir.scaleY);
    this.fork.setup(sortir.scaleX, sortir.scaleY);

    this.drawDisplayObject(background);
    this.drawDisplayObject(sortir);
    this.drawDisplayObject(dirt);
    this.drawDisplayObject(this.fork);

    this.dynamicDisplayObjectsList.push(dirt, this.fork);
    this.displayObjectsList.push(background, sortir, dirt, this.fork);
  }

  drawDisplayObject(displayObject) {
    this.ctx.drawImage(
      displayObject.image,
      displayObject.x,
      displayObject.y,
      displayObject.width,
      displayObject.height
    );
  }

  update() {
    for (let displayObject of this.displayObjectsList) {
      /* if (displayObject.isChanged) {
        this.drawDisplayObject(displayObject);
        displayObject.isChanged = false;
      } */
      this.drawDisplayObject(displayObject);
    }
  }

  startCleaning() {
    this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  onMouseMove(event) {
    this.fork.updatePosition(event.clientX, event.clientY);
  }
}
