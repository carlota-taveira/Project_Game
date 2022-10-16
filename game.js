class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = canvas.getContext('2d');
      this.icon = null;
      this.obstacles = [];
      this.selectedObs1 = [];
      this.selectedObs2 =[];
      this.intervalId = null;
      this.frames = 0;
      this.width = 700;
      this.height = 800;
      this.background = new Image();
      this.controls = null;
    }

    drawBackground() {
      this.background.src = "/docs/assets/images/background.jpeg";
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    }
  
    start() {
      this.icon = new Player(325, 700, 90, 90, this.ctx);
      this.controls = new Controls(this.icon);
      this.controls.keyboardEvents();
      this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
      this.frames++;
      this.drawBackground();
      this.icon.draw();
      this.updateObstacles();
      this.checkGameOver();
      this.updateSelectedObs1();
      this.drawRectangle();
      this.checkNext();
    };
   
  updateSelectedObs1() {
        for (let i = 0; i < this.selectedObs1.length; i++) {
          this.selectedObs1[i].y += 1;
          this.selectedObs1[i].draw();
        }
    
        if (this.frames % 700 === 2) {
          this.selectedObs1.push(new selectedObs1(this.ctx));
        }
      }

      checkNext () {
        const next = this.selectedObs1.some((selectedObs1) => {
            return this.icon.colect(selectedObs1);
        });
        if (next) {
        return this.next1() 
        }
    }

 updateSelectedObs2() {
        for (let i = 0; i < this.selectedObs2.length; i++) {
          this.selectedObs2[i].y += 1;
          this.selectedObs2[i].draw();
        }
    
        if (this.frames % 700 === 2) {
          this.selectedObs2.push(new selectedObs2(this.ctx));
        }
      }
    
  updateObstacles() {
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].y += 1;
        this.obstacles[i].draw();
      }
  
      if (this.frames % 120 === 0) {
        this.obstacles.push(new Obs(this.ctx));
      }
    }
  
    checkGameOver() {
      const crashed = this.obstacles.some((obstacle) => {
        return this.icon.crashWith(obstacle);
      });
  
      if (crashed) {
        this.stop();
      }
    }
    next1() { // I might have to implement some interval time just to go up on the level to find potatoes
        requestAnimationFrame(updateCanvas); //it's not working
      }

    stop() {
      clearInterval(this.intervalId);
    }
  }

  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      let game = new Game();
      game.start();
    }
  };