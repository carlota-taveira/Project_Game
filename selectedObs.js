class selectedObs1 {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 700) - 200;
      this.y = 0;
      this.w = 50;
      this.h = 50;
      this.img = new Image;
    }
  
    draw() {
        this.img.src = "/docs/assets/images/icons8-pizza-48.png"
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

  class selectedObs2 {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 700) - 200;
      this.y = 0;
      this.w = 50;
      this.h = 50;
      this.img = new Image;
    }
  
    draw() {
        this.img.src = "/docs/assets/images/icons8-pizza-48.png"
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











/* class Obs {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = Math.floor(Math.random() * 700) - 200;
      this.y = 0;
      this.w = 50;
      this.h = 50;
      this.img = new Image;
    }

    draw() {
        this.img = b;
        this.img.src = "/docs/assets/images/icons8-poultry-leg-48.png";
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
        this.img.src = "/docs/assets/images/icons8-prawn-48.png";;
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
        this.img.src = "/docs/assets/images/icons8-rack-of-lamb-48.png";
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
        this.img.src = "/docs/assets/images/icons8-steak-48.png";
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
  } */