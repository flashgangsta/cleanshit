import Rectangle from "./utils/Rectangle";

export default class DisplayObject {
  constructor(image) {
    this._image = image;
    this._x = 0;
    this._y = 0;
    this._width = image.width;
    this._height = image.height;
    this._rect = new Rectangle(0, 0, image.width, image.height);
    this.isChanged = false;
  }

  get x() {
    return this._rect.x;
  }

  set x(value) {
    this._x = this._rect.x = value;
  }

  get y() {
    return this._rect.y;
  }

  set y(value) {
    return (this._y = this._rect.y = value);
  }

  get width() {
    return this._rect.width;
  }

  get height() {
    return this._rect.height;
  }

  get rect() {
    return this._rect;
  }

  get image() {
    return this._image;
  }

  get scaleX() {
    return this._rect.width / this._image.width;
  }

  get scaleY() {
    return this._rect.height / this._image.height;
  }

  set scaleX(value) {
    this._width = this._rect.width = this._width * value;
  }

  set scaleY(value) {
    this._height = this._rect.height = this._height * value;
  }

  get isChanged() {
    return this._isChanged;
  }

  set isChanged(value) {
    this._isChanged = !!value;
  }
}
