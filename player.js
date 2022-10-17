
class Player {
        constructor(x, y, w, h, ctx) {
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.ctx = ctx;
          this.img = new Image();
        }

        
        draw() {
          this.img.src = "/docs/assets/images/Prancheta 8.png";
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
      
        crashWith(obstacles) {
          return !(
            this.bottom() < obstacles.top() ||
            this.top() > obstacles.bottom() ||
            this.right() < obstacles.left() ||
            this.left() > obstacles.right()
          );
        }
        colect (selectedObs) {
        return !(
            this.bottom() < selectedObs.top() ||
            this.top() > selectedObs.bottom() ||
            this.right() < selectedObs.left() ||
            this.left() > selectedObs.right()
          );
        }
    }
      class Controls {
        constructor(icon) {
          this.icon = icon;
        }
      
        keyboardEvents() {
          window.addEventListener('keydown', (e) => {
            switch (e.code) {
              case 'ArrowLeft':
                if (this.icon.x > 15) {
                  this.icon.x -= 10;
                }
                break;
              case 'ArrowRight':
                if (this.icon.x + this.icon.w < 675) {
                  this.icon.x += 10;
                }
                break;
            }
          });
        }
      }
      