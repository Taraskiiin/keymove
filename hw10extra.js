const player = document.getElementById("walk__point");
let moveStepY = 0;
let moveStepX = 0;
const pointMoveDown = () => {
    moveStepY += 15;
    if (moveStepY > -15 && moveStepY < 435) {
        player.style.top = moveStepY + "px";
    }
}
const pointMoveUp = () => {
    moveStepY -= 15;
    if (moveStepY > -15 && moveStepY < 435) {
        player.style.top = moveStepY + "px";
    }
}
const pointMoveLeft = () => {
    moveStepX -= 15;
    if (moveStepX > -15 && moveStepX < 985) {
        player.style.left = moveStepX + "px";
    }
}
function pointMoveRight() {
    moveStepX += 15;
    if (moveStepX > -15 && moveStepX < 985) {
        player.style.left = moveStepX + "px";
    }
}
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 40:
            pointMoveDown();
            break;
        case 38:
            pointMoveUp();
            break;
        case 39:
            pointMoveRight();
            break;
        case 37:
            pointMoveLeft();
            break;
    }
});