class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = canvas.getContext('2d');
      this.icon = null;
      this.obstacles = [];
      this.selectedObs = [];
      this.intervalId = null;
      this.frames = 0;
      this.width = 700;
      this.height = 800;
      this.background = new Image();
      this.controls = null;
      this.level = [0];
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
      this.updateSelectedObs();
      this.checkNext();
      this.checkGameOver();
     
    };
   
  updateSelectedObs() {
        for (let i = 0; i < this.selectedObs.length; i++) {
          this.selectedObs[i].y += 1;
          this.selectedObs[i].draw();
        }
    
        if (this.frames % 300 === 0) {
          this.selectedObs.push(new selectedObs(this.ctx, this.level));
        }
      }

      checkNext () {
        const next = this.selectedObs.some((selectedObs) => {
            return this.icon.colect(selectedObs);
        });
        if (next) {
        this.level++;
        this.selectedObs = []
        }
    }
    
  updateObstacles() {
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].y += 1;
        this.obstacles[i].draw();
      }
  
      if (this.frames % 80 === 0) {
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