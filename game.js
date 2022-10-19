let gameOverScreen = document.getElementById('game-over');
let gameWinScreen = document.getElementById('game-win');

class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = canvas.getContext('2d');
      this.icon = null;
      this.obstacles = [];
      this.selectedObs = [];
      this.intervalId = null;
      this.frames = 0;
      this.width = 500;
      this.height = 600;
      this.background = new Image();
      this.controls = null;
      this.level = 0;
      this.health = 400;
      this.gameIsRunning = false;
      this.imga = new Image ();
    
    }

    losingLife() {
      this.ctx.fillStyle = "yellow"
      this.ctx.fillRect (20, 20, this.health, 10)
      this.imga.src = "/docs/assets/images/icons8-coins-32-removebg-preview.png";
      this.ctx.drawImage(this.imga, 5, 5);
    }

    drawBackground() {
      this.background.src = "/docs/assets/images/background.jpeg";
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    }
  
    start() {
      this.icon = new Player(225, 550, 60, 40, this.ctx);
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
     
    };
   
  updateSelectedObs() {
        for (let i = 0; i < this.selectedObs.length; i++) {
          this.selectedObs[i].y += 4;
          this.selectedObs[i].draw();
        }
    
        if (this.frames % 300 === 0) {
          this.selectedObs.push(new selectedObs(this.ctx, this.level));
        }
      } 
     

      checkNext() {
        const next = this.selectedObs.some((selectedObs) => {
            return this.icon.colect(selectedObs);
        });
        if (next) {
        this.level++;
        this.selectedObs = []
        } else if(this.level === 1){
          this.stop();
          gameOverScreen.classList.add('hidden');
          gameWinScreen.classList.remove('hidden')
        }
    }
    
  updateObstacles() {
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].y += 2;
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
      gameOverScreen.classList.remove('hidden');
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
    
    document.getElementById('start-button').onclick = () => {
      if(!game){
        let startScreen = document.getElementById('start-screen');
        startScreen.classList.add('hidden')
        startGame();
      }
    };

    document.getElementById('restart-button').onclick = () => {
      if(game && !game.gameIsRunning){
        gameOverScreen.classList.add('hidden');
        gameWinScreen.classList.add('hidden');
        startGame();
      }
    };

    document.getElementById('btn').onclick = () => {
      if(game && !game.gameIsRunning){
        gameOverScreen.classList.add('hidden');
        gameWinScreen.classList.add('hidden');
        startGame();
      }
    };
    
    function startGame() {
      game = new Game();
      game.start();
    }
  };

