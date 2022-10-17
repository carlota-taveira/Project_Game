class Obs {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 700) - 300;
      this.y = 0;
      this.w = 50;
      this.h = 50;
      this.img = new Image();
      this.imagesArray = ["/docs/assets/images/icons8-ham-48.png",
      "/docs/assets/images/icons8-crab-48__1_-removebg-preview.png",
      "/docs/assets/images/icons8-rack-of-lamb-48-removebg-preview.png",
      "/docs/assets/images/icons8-prawn-48-removebg-preview.png",
      "/docs/assets/images/icons8-steak-48-removebg-preview.png"]
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

  
  