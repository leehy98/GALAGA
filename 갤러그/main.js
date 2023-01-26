
// canvas setting
let canvas;
let ctx;
canvas = document.createElement("canvas");
canvas.width = 1400;
canvas.height = 900;
ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

let spaceShipHealth;



let backgroundImage,shipImage,bulletImage,enemyImage,middleEnemyImage,BossImage;
let spaceShipX = canvas.width*0.45;
let spaceShipY = canvas.height*0.85;

// loadImage function
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "image/background.png";

    shipImage = new Image();
    shipImage.src = "image/spaceShip .png";

    bulletImage = new Image();
    bulletImage.src = "image/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "image/enemy.png";

    middleEnemyImage = new Image();
    middleEnemyImage.src = "image/middleEnemy.png";

    BossImage = new Image();
    BossImage.src = "image/BOSS.png";
}

let keydown
function setKeyBoardListener(){
    document.addEventListener("keydown",function(event){
         case 39:
                    spaceShipX("left",1);
                        break;
                case 37:
                     spaceShipX("left",-1);
                        break;
                case 40:
                    spaceShipY("top",  1);
                        break;
                case 38 :
                    spaceShipY("top, -1");
                        break;
    });

}
// render function
function render(){
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(shipImage,spaceShipX,spaceShipY);
}

//main function
function main(){
    render()
    requestAnimationFrame(main)
}

// call function
loadImage();
setKeyBoardListener();
main();