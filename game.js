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
      this.health = 300;
      this.gameIsRunning = false;
    
    }

    losingLife() {
      this.ctx.fillStyle = "yellow"
      this.ctx.fillRect (50, 50, this.health, 20)
    }

    drawBackground() {
      this.background.src = "/docs/assets/images/background.jpeg";
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    }
  
    start() {
      this.icon = new Player(325, 700, 100, 60, this.ctx);
      this.controls = new Controls(this.icon);
      this.controls.keyboardEvents();
      this.intervalId = setInterval(this.update, 1000 / 60);
      this.gameIsRunning = true;
    }

    update = () => {
      this.frames++;
      this.drawBackground();
      this.icon.draw();
      this.losingLife();
      this.updateObstacles();
      this.updateSelectedObs();
      this.checkNext();
      this.checkGameOver();
      ;
     
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
     for (let i = 0; i < this.obstacles.length; i++) {
     if (this.icon.crashWith(this.obstacles[i])) {
      this.obstacles.splice(i, 1) // aqui retira o obstacle da array
      this.health -=100
     } else if (this.health <= 0){
      this.stop()
     }
     } 
      }

    stop() {
      clearInterval(this.intervalId);
      let gameOverScreen = document.getElementById('game-over');
        gameOverScreen.classList.remove('hidden')
      this.gameIsRunning = false;
    }
  }

  let game;
  window.onload = () => {
    //Start Button
    document.getElementById('start-button').onclick = () => {
      if(!game){
        let startScreen = document.getElementById('start-screen');
        startScreen.classList.add('hidden')
        startGame();
      }
    };
    // restart button
    document.getElementById('restart-button').onclick = () => {
      if(game && !game.gameIsRunning){
        let gameOverScreen = document.getElementById('game-over');
        gameOverScreen.classList.add('hidden')
        startGame();
      }
    };
  
    function startGame() {
      game = new Game();
      game.start();
    }
  };

 //azer game over screen with background white 



  // make image in photoshop with small images of icons that we are meant to catch
  // inside class game use the draw image on top of the screen 