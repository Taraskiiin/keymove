class Player {
    constructor(player, moveStepX, moveStepY) {
        this.player = player,
        this.moveStepX = moveStepX,
        this.moveStepY = moveStepY
    }
    pointMoveDown(){
        this.moveStepY += 15;
        if (this.moveStepY > -15 && this.moveStepY < 435) {
            this.player.style.top = this.moveStepY + "px";
        }
    }
    pointMoveUp(){
        this.moveStepY -= 15;
        if (this.moveStepY > -15 && this.moveStepY < 435) {  
            this.player.style.top = this.moveStepY + "px";
        }
    }
    pointMoveLeft(){
        this.moveStepX -= 15;
        if (this.moveStepX > -15 && this.moveStepX < 985) {  
            this.player.style.left = this.moveStepX + "px";
        }
    }
    pointMoveRight(){
        this.moveStepX += 15;
        if (this.moveStepX > -15 && this.moveStepX < 985) {
            this.player.style.left = this.moveStepX + "px";
        }
    }
}
const player = new Player(document.getElementById("walk__point"), 0, 0);
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 40:
            player.pointMoveDown();
            break;
        case 38:
            player.pointMoveUp();
            break;
        case 39:
            player.pointMoveRight();
            break;
        case 37:
            player.pointMoveLeft();
            break;
    }
});
