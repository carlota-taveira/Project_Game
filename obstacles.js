class Obs {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 700) - 300;
      this.y = 0;
      this.w = 50;
      this.h = 50;
      this.img = new Image();
      this.imagesArray = ["/docs/assets/images/icons8-crab-48 (1).png",
      "/docs/assets/images/icons8-poultry-leg-48.png",
      "/docs/assets/images/icons8-rack-of-lamb-48.png",
      "/docs/assets/images/icons8-prawn-48.png"]
      this.foodImages = this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]
    }
  
    draw() {
        this.img.src = this.foodImages
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

  
  