class Platform {
  constructor(x, y, w, h) {
    this.platform = createSprite(x, y, w, h);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display() {
    drawSprites();
  }
}
