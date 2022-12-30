'use strict';

const body = document.querySelector('body');
    const gameContainer = document.querySelector(".gameContainer");
        const score = document.querySelector(".score");
        const timer= document.querySelector(".timer");
        const lifeImg = document.querySelectorAll(".lifeSet__item");


        const gameView = document.querySelector(".gameView");    
        const viewRect = gameView.getBoundingClientRect();
            const alertView =document.querySelector(".alertView");
            const BtnStart = document.querySelector(".BtnStart");
    
            const replayView = document.querySelector(".gameView__replay");
                const BtnReplay =document.querySelector(".gameView__replay__btn");

    // SoundSet //가져오기 
    const soundTrash = new Audio();
    soundTrash.src ="sound/trashSound.mp3";
    const soundFish = new Audio();
    soundFish.src ="sound/alert.wav";
    const gameBG = new Audio();
    gameBG.src ="sound/creativeminds.mp3";

// 전역변수 설정
let point=0;
let second=10;
let userLife = 3;
let ISStarted =false;
const IMG_SIZE =90;
const TRASH_COUNT = 6;
const FISH_COUNT = 4;
 
let makeItemsId = undefined;
let countDownId = undefined;



function startGame(){
    ISStarted=true;
    timer.style.display='inline'; 
    score.style.display='inline'; 
    showRemainingTime(second);
    startTimer(); 
    showPoint();  
    
      startMakingCharacters();  
}

function finishGame(){
    ISStarted=false;
    stopMakingCharacters();
    stopTimer();
    gameBG.pause();
    getAllImgRemove();
    showReplayBox();
    
}

function startTimer(){
    countDownId= setInterval(()=>{
        second--;  
        showRemainingTime(second);  
        if(second==0){
            finishGame();
        }
    },1000);
}

function showRemainingTime(sec){
    let min = Math.floor(sec/60);
    timer.innerText = `${min<10?0:''}${min}:${sec<10?0:''}${sec}`;
}

function stopTimer(){
    clearInterval(countDownId);
}

function startMakingCharacters(){
    makeItemsId = setInterval(()=>{
        makeCharacters();
        if(userLife==0|| second==0){
            stopMakingCharacters();
        }
    },1000);
}

function stopMakingCharacters(){
    clearInterval(makeItemsId);
}

function makeCharacters(){  
    makeItem('trash',TRASH_COUNT,'img/trash.png');
    makeItem('fish',FISH_COUNT,'img/fish2.png');
}

function makeItem(className, count, imgSrc){
    for(let i=0; i<count; i++){
    const MIN_X =0;
    const MAX_X =viewRect.width-IMG_SIZE;
    const MIN_Y =0;
    const MAX_Y =viewRect.height-IMG_SIZE;
    let x = randomNum(MIN_X,MAX_X);
    let y = randomNum(MIN_Y,MAX_Y);
    let item = document.createElement("img");
    item.setAttribute('class', className);
    item.setAttribute('src', imgSrc);
    item.style.left = x+"px";
    item.style.top  = y+"px";
    gameView.appendChild(item);
    }
}

function randomNum(min, max){
    return Math.random()*(max-min) +min;
}
function lifeDone(){
    userLife--; //2,1,0
    lifeImg[userLife].style.display='none';
    if(userLife==0){
        finishGame(); 
    }
}
function showPoint(){
    score.innerHTML = `Score: ${point}`;
}

function getAllImgRemove(){
    const arrT = document.querySelectorAll(".trash");
    const arrF = document.querySelectorAll(".fish");
    arrT.forEach(trash=>trash.style.display='none');
    arrF.forEach(fish=>fish.style.display='none');
}

function showReplayBox(){
    replayView.style.display='flex';
}
function pointUp(){
    point++;
    showPoint(point);
}
function playSound(soundName){
    soundName=='trash'&&soundTrash.play();
    soundName=='fish'&&soundFish.play();

}

// Click 이벤트 위임하기 
gameContainer.addEventListener('click',(event)=>{
    let target  = event.target;
    let className = target.className; 
    
         if(className=='BtnStart'){
             gameBG.play();
             startGame();  
             alertView.style.display='none';
             BtnStart.style.display='none';
            }
        if(className=='trash'){
              playSound('trash');
              pointUp();
              target.remove();
          }
           else if(className=='fish'){
               playSound('fish');
               lifeDone();
               target.remove();
               }
    });       
    
    BtnReplay.addEventListener('click',()=>{
        point =0;
        score.innerHTML = `Your Score: ${point}`;
        userLife =3;
        for(let i=0; i<userLife; i++){
            lifeImg[i].style.display='inline';
        }
        second=10;
        showRemainingTime(second);
        replayView.style.display='none';    
        BtnStart.style.display='inline';  
    });




