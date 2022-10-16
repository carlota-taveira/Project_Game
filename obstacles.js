class Obs {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 700) - 200;
      this.y = 0;
      this.w = 50;
      this.h = 50;
      this.img = new Image;
    }
  
    draw() {
        this.img.src = "/docs/assets/images/icons8-crab-48 (1).png";
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } // how will I add more than one image? Already tried as obj and as an array, nothing happens, states that
    // it is not defined
  
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
// - possible solution to add extra images?
  class Obs2 extends Obs {
    constructor(ctx, img) {
      super(ctx);
      this.img = img
    }

    draw() {
        this.img.src = "/docs/assets/images/icons8-poultry-leg-48.png";
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } // how will I add more than one image? Already tried as obj and as an array, nothing happens, states that
    // it is not defined
  
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


  
  