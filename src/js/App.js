import Display from "./Display";
import AssetsLoader from "./AssetsLoader";

export default class App {
  constructor() {
    this.display = null;
    this.assetsLoader = null;
    this.init();
  }

  init() {
    console.log("App.init()");
    this.display = new Display();
    this.assetsLoader = new AssetsLoader();

    //window.addEventListener("resize", this.onWindowResize.bind(this));
    this.onWindowResize();

    this.assetsLoader.addEventListener(
      "AllAssetsLoaded",
      this.onAllAssetsLoaded.bind(this)
    );
    this.assetsLoader.start();
  }

  draw() {
    this.display.update();
    requestAnimationFrame(this.draw.bind(this));
  }

  onWindowResize(event = null) {
    console.log("onWindowResize");
    this.display.resize();
  }

  onAllAssetsLoaded(event) {
    console.log("onAllAssetsLoaded!!");
    this.display.drawPlayField(this.assetsLoader);
    this.startCleaning();
  }

  startCleaning() {
    this.display.startCleaning();
    this.draw();
  }
}
