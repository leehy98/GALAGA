
// canvas setting
let canvas;
let ctx;
canvas = document.createElement("canvas");
canvas.width = 1200;
canvas.height = 700;
ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

let backgroundImage,shipImage,bulletImage,enemyImage,middleEnemyImage,BossImage;
let gameOver =false;

let Score = 0;

let spaceShipX = canvas.width*0.45;
let spaceShipY = canvas.height*0.85;

let BulletList = []
function Bullet(){
    this.x = 0;
    this.y = 0;
    this.init = function(){
        this.x = spaceShipX+24;
        this.y = spaceShipY-10;
        this.alive = true;
        BulletList.push(this)
    }
    this. update = function(){
        this.y -= 10;
    }
    this.checkHit = function(){
        for(let i = 0; EnemyList.length; i++){
            if(this.y <= EnemyList[i].y && this.x >= EnemyList[i].x && this.x <= EnemyList[i].x + 40 ){
                Score++;
                this.alive = false;
                EnemyList.slice(i,1);
            }
        }
    }
}
function generateRandomValue (min,max){
    let randomNum = Math.floor(Math.random()*(max-min+1))+min;
    return randomNum
}
let EnemyList= []
function enemy(){
    this.x = 0;
    this.y = 0;
    this.init = function(){
        this.x = generateRandomValue(0,1130);
        this.y = 0;
        EnemyList.push(this);
    }
    this.update = function(){
    this.y += 2;

        if(this.y >= 660){
            gameOver = true;
        }
    }
}

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

    gameOverImage = new Image();
    gameOverImage.src = "image/gameOver.png";

    //BossImage = new Image();
    //BossImage.src = "image/BOSS.png";
}

let keydown ={};
function setKeyBoardListener(){
    document.addEventListener("keydown",function(event){
        keydown[event.keyCode] = true;
        //console.log(keydown);

    });
    document.addEventListener("keyup",function(event){
         delete keydown[event.keyCode]
        //console.log(keydown);

        if(event.keyCode == 32){
            createBullet()
        }
    });

};
function createBullet(){
    //console.log("탄알 생성");
    let B = new Bullet();
    B.init();
}
function createEnemy(){
    const interval = setInterval(function(){
        let E = new enemy()
        E.init()
    },900)
}




function update(){
    if( 39 in keydown){
        spaceShipX += 5;
    }
    if( 37 in keydown){
         spaceShipX -= 5;
    }
    if( 40 in keydown){
             spaceShipY += 5;
    }
    if( 38 in keydown){
              spaceShipY -= 5;
    }
    if(spaceShipX <= 0){
             spaceShipX = 0;
    }
    if(spaceShipX >= 1130){
             spaceShipX = 1130;
    }
    if(spaceShipY >= 630){
             spaceShipY = 630;
    }
    if(spaceShipY <= 0){
             spaceShipY = 0;
    }
    for(let i=0; i< BulletList.length;i++){
            BulletList[i].update();
            BulletList[i].checkHit();
    }
    for(let i=0; i< EnemyList.length;i++){
            EnemyList[i].update();
        }
}

// render function
function render(){
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(shipImage,spaceShipX,spaceShipY);

    for(let i = 0; i< BulletList.length; i++){
        if(BulletList[i].alive)
        ctx.drawImage(bulletImage,BulletList[i].x,BulletList[i].y)
    }

    for(let i = 0; i< EnemyList.length; i++){
         ctx.drawImage(enemyImage,EnemyList[i].x,EnemyList[i].y)
        }
}

//main function
function main(){
    if(!gameOver){
        update();
        render();
        requestAnimationFrame(main);
    }else{
        ctx.drawImage(gameOverImage,50,140,380,380);
    }

};

// call function
loadImage();
setKeyBoardListener();
createEnemy();
main();