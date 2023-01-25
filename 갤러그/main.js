

let canvas;
let ctx;
canvas = document.createElement("canvas");
canvas.width = 1200;
canvas.height = 700;
ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

let backgroundImage,shipImage,bulletImage,enemyImage,middleEnemyImage,BossImage;




function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "image/background.png";

    shipImage = new Image();
    shipImage.src = "image/spaceShip.png";

    bulletImage = new Image();
    bulletImage.src = "image/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "image/enemy.png";

    middleEnemyImage = new Image();
    middleEnemyImage.src = "image/middleEnemy.png";

    BossImage = new Image();
    BossImage.src = "image/BOSS.png";
}

function render(){
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);

}

function main(){
    render()
    requestAnimationFrame(main)
}
loadImage();
main();