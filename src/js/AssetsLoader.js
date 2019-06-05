export default class AssetsLoader extends EventTarget {
  constructor() {
    super();
    this.init();
    this.imagesLoaded = 0;
    this.imagesLoaded = false;
    this.PATH = "/src/assets/";
    this.IMAGES = [
      { key: "background", filename: "background.png" },
      { key: "dirt", filename: "dirt.png" },
      { key: "fork", filename: "fork.png" },
      { key: "sortir", filename: "sortir.png" }
    ];
    this.imagesByKeyList = [];
  }

  init() {
    console.log("AssetsLoader.init()");
  }

  start() {
    for (let data of this.IMAGES) {
      let image = new Image();
      image.addEventListener("load", () => {
        this.onImageLoaded(image, data);
      });
      image.src = this.PATH + data.filename;
    }
  }

  onImageLoaded(image, data) {
    this.imagesLoaded++;
    this.imagesByKeyList[data.key] = image;
    if (this.imagesLoaded === this.IMAGES.length) {
      console.log(`All Images Loaded (${this.imagesLoaded})`);
      this.imagesLoaded = true;
      this.onAllAssetsLoaded();
    }
  }

  onAllAssetsLoaded() {
    if (!this.imagesLoaded) {
      return;
    }
    this.dispatchEvent(new CustomEvent("AllAssetsLoaded"));
  }

  getImageByKey(key) {
    return this.imagesByKeyList[key];
  }
}
