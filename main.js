let audio = new Audio('sounds/African_fun_long.mp3');
audio.pause();
let  = document.querySelector("#replay");
let mute = document.querySelector("#mute");
let audioPlay = true;
console.log(mute);
console.log(replay);


replay.addEventListener("click", ()=>{
    location.reload(); 

   
})
mute.addEventListener("click", ()=>{
    if (audioPlay){
    audio.pause();
    audioPlay = false;
    }
    else {
        audioPlay = true;
        audio.play();
    }
})

function gameOver() {

    let tid = mins / 60 + secs;
    let score = 0;

    console.log(tid)

    if (tid > 100) {
        
        score = 20
        alert("Du fik 20 Points !")
    }

    else if (tid > 75) {

        score = 15
        alert("Du fik 15 Points !")
    }
      else if (tid > 50) {

        score = 10
        alert("Du fik 10 Points !")
    }
      else if (tid > 25) {

        score = 5
        alert("Du fik 5 Points !")
    }
      else if (tid < 5) {

        score = 0
        alert("Du fik 0 Points !")
    }
    console.log(score)
}

// TID 
        var mins = 2; 
        var secs = mins * 60; 
        function countdown() { 
            setTimeout('Decrement()', 60); 
        } 
  
        function Decrement() { 
            if (document.getElementById) { 
                minutes = document.getElementById("minutes"); 
                seconds = document.getElementById("seconds");  
                if (seconds < 59) { 
                    seconds.value = secs; 
                } 
                else { 
                    minutes.value = getminutes(); 
                    seconds.value = getseconds(); 
                } 
               
                if (mins < 0.30) { 
                    minutes.style.color = "red"; 
                    seconds.style.color = "red"; 
                } 
                
                if (mins < 0) { 
                    playlose()
                    alert('Game over !'); 
                    location.reload()
                    minutes.value = 0; 
                    seconds.value = 0; 
                   
                } 
                else { 
                    secs--; 
                    setTimeout('Decrement()', 1000); 
                } 
            } 
        } 
  
        function getminutes() { 
            mins = Math.floor(secs / 60); 
            return mins; 
        } 
  
        function getseconds() { 
            return secs - Math.round(mins * 60); 
        } 
        let health = document.querySelector("#health")
 function healthxx() {
     if (player === bomb){
         health.value -= 10; 
     }
 }



let canvas = document.querySelector("#canvas"); 
let ctx = canvas.getContext('2d'); 

let maze = 

[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3],
    [0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,0,0,0,5,0,0,0,0,1,5,0,1,4,1,5,1,1],
    [0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0],
    [0,0,0,1,1,0,1,0,0,1,2,1,0,1,1,0,0,1,4,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]


let tileSize = 50;
let collectSize = 30;
let playerPosition = {x:0, y:0};

let parrotCounter = 0;

let pirat = 2;
piratImg = new Image(); 
piratImg.src= 'images/tarzan.png';

let trunk = 1;
trunkImg = new Image();
trunkImg.src= 'images/trunk.png';

let treasure = 3;
treasureImg = new Image();
treasureImg.src= 'images/treasure.png';


let bomb = 4;
bombImg = new Image();
bombImg.src= 'images/diamond.png';

let coin = 5;
coinImg = new Image();
coinImg.src= 'images/ruby.png';

let parrot = 6;
parrotImg = new Image();
parrotImg.src= 'images/parrot.png';


let coinCollector = 0;

function playlose(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_character_frustrated_urrhh_10463.mp3');
    gameSound.play();
}
function playBomb(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_descend_mallets_high_to_low_slow_002_47927.mp3');
    gameSound.play();
}
function playParrot(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_parrot_squawk_001_19824.mp3');
    gameSound.play();
}
function playCoin(){

    let gameSound = new Audio('sounds/zapsplat_cartoon_ascend_climb_fast_mallet_004_45223.mp3');
    gameSound.play();
}
function playCoinLaugh(){

    let gameSound = new Audio('gamesounds/zapsplat_male_laugh_cartoon_like_003_50252.mp3');
    gameSound.play();
}
function playWin(){

    let gameSound = new Audio('gamesounds/zapsplat_male_laugh_cartoon_like_002_50251.mp3');
    gameSound.play();
}
function playWinMusic(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_sneaky_walk_music_piano_tuba_marimba_18135.mp3');
    gameSound.play();

}
function CoinCouter() {
    document.querySelector('#coinCollector').innerHTML = coinCollector;
}


let navn = setInterval(parrotWalk,1500);
function parrotWalk(){
    parrotCounter++;
    if(parrotCounter < 4) {

        for(let y= 0; y < maze.length; y++){

            for(let x = 0; x < maze[y].length; x++){

     if(maze[y][x] === 6){
         if(maze[y - 1][x] == 1) {
             maze[y - 1][x] = 6; 
             maze[y][x] = 1;
     
             
             
         }
         else if (maze[y - 1][x] == 2){
             maze[y - 1][x] = 6;
             maze[y][x] = 1;
         }

        
        }
    }
        
    }


    drawMaze();
}else if(parrotCounter < 8) { 
    for(let y= 0; y < maze.length; y++){
        for(let x = 0; x < maze[y].length; x++){

 if(maze[y][x] === 6){
    console.log(parrotCounter);
     if(maze[y + 1][x] == 1 || maze[y + 1][x] == 6) {
         maze[y + 1][x] = 6; 
         maze[y][x] = 1;    
     }
     else if (maze[y + 1][x] == 2){
         maze[y + 1][x] = 6;
         maze[y][x] = 1;
     }

    
    }
}
    }
    drawMaze();

} else {
    parrotCounter = 0;
}
    
}







function drawMaze(){

    for(let y= 0; y < maze.length; y++){

      for(let x = 0; x < maze[y].length; x++){



        if(maze[y][x] === 0){
            ctx.fillStyle = 'transparent';
            ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === trunk){
            ctx.drawImage(trunkImg,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === pirat){
            playerPosition.x = x; 
            playerPosition.y = y;
            ctx.drawImage(trunkImg,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(piratImg,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === treasure){
            ctx.drawImage(treasureImg,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === bomb){
            ctx.drawImage(trunkImg,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(bombImg,x*collectSize,y*collectSize,collectSize,collectSize);
        }else if(maze[y][x] === coin){
            ctx.drawImage(trunkImg,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(coinImg,x*collectSize,y*collectSize,collectSize,collectSize);
        }else if(maze[y][x] === parrot){ 
            ctx.drawImage(trunkImg,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(parrotImg,x*tileSize,y*tileSize,tileSize,tileSize);

        }

      }
    }

}



function walk(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_imoact_hollow_plonk_002_50049.mp3');
    gameSound.play();

}

window.addEventListener("keydown", (e)=>{
    console.log(e);
switch(e.keyCode){

    case 37: // left


    if(maze[playerPosition.y][playerPosition.x -1] === trunk){
       maze[playerPosition.y ][playerPosition.x -1] = pirat //players nye position
       maze[playerPosition.y ][playerPosition.x] = trunk//players gamle position
       drawMaze();
       walk();
       playsound();
    
} 


if (maze[playerPosition.y ] [playerPosition.x -1 ] === bomb){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);


    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === parrot){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);

    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === coin){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }

    break; 

    case 38: // up

    if(maze[playerPosition.y -1][playerPosition.x] === trunk){
       maze[playerPosition.y -1 ][playerPosition.x] = pirat //players nye position
       maze[playerPosition.y ][playerPosition.x] = trunk//players nye position

       
       drawMaze();
       walk();
    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === bomb){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);

    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === parrot){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
       
    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === coin){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }
    break; 
    case 39: // right

    if(maze[playerPosition.y][playerPosition.x +1] === trunk){
       maze[playerPosition.y ][playerPosition.x +1] = pirat //players nye position
       maze[playerPosition.y ][playerPosition.x] = trunk//players gamle position
       console.log(maze);
       drawMaze();
       walk();

    }
    else if (maze[playerPosition.y ] [playerPosition.x +1 ] === bomb){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y ] [playerPosition.x +1] === parrot){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y ] [playerPosition.x +1 ] === treasure){
        audio.pause();
        playWin();
        playWinMusic();
        setTimeout(function() { alert("YOU WON"); window.location.href = "level2.html"; }, 1000);
    }
    else if (maze[playerPosition.y ] [playerPosition.x +1] === coin){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }
    break; 
    case 40: // down

    if(maze[playerPosition.y+1][playerPosition.x] === trunk){
       maze[playerPosition.y+1 ][playerPosition.x] = pirat //players nye position
       maze[playerPosition.y ][playerPosition.x] = trunk//players nye position
       drawMaze();
       walk();
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === bomb){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === parrot){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === coin){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }

    break; 
    

}
    
    //left 37

    // up 38

    //right 39

    //down 40

    
})




window.addEventListener("keydown", keyDownTextField, false);
window.addEventListener("load", drawMaze);