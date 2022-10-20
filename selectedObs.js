class selectedObs {
    constructor(ctx, level) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 475);
      this.y = 0;
      this.w = 30;
      this.h = 30;
      this.img = new Image();
      this.selectedImages = ["docs/assets/images/icons8-broccoli-48.png",
    "docs/assets/images/icons8-bread-48.png",
    "docs/assets/images/icons8-potato-48-removebg-preview.png",
    "docs/assets/images/icons8-noodles-48.png",
    "docs/assets/images/icons8-rice-bowl-48.png",
    "docs/assets/images/icons8-spinach-48-removebg-preview.png",
    "docs/assets/images/icons8-sweet-banana-48-removebg-preview.png"]
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

  