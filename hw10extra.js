const player = document.getElementById("walk__point");
let moveStepY = 0;
let moveStepX = 0;
const pointMoveDown = () => {
    moveStepY += 15;
    player.style.top = moveStepY + "px";
}
const pointMoveUp = () => {
    moveStepY -= 15;
    player.style.top = moveStepY + "px";
}
const pointMoveLeft = () => {
    moveStepX -= 15;
    player.style.left = moveStepX + "px";
}
function pointMoveRight(){
    moveStepX += 15;
    player.style.left = moveStepX + "px";
}
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 40:
            pointMoveDown();
        case 38:
            pointMoveUp();
        case 39:
            pointMoveRight();
        case 37:
            pointMoveLeft();
    }       
});