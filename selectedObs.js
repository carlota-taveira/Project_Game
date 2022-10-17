class selectedObs {
    constructor(ctx, level) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 700) - 300;
      this.y = 0;
      this.w = 50;
      this.h = 50;
      this.img = new Image();
      this.selectedImages = ["/docs/assets/images/icons8-potato-48.png",
    "/docs/assets/images/icons8-pizza-48.png",
    "/docs/assets/images/icons8-spinach-48.png",
    "/docs/assets/images/icons8-sweet-banana-48.png"]
      this.selectedFood = this.selectedImages[level]
      
    }
  
    draw() {
        this.img.src = this.selectedFood
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } 
  
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.h;
    }
    left() {
      return this.x;
    }
    right() {
      return this.x + this.w;
    }
  }

  