'use strict';
//🔥✨🔥✨🔥✨🔥✨🔥✨🔥✨🔥✨🔥✨🔥✨🔥✨
//use strict꼭 써야함.

const body = document.querySelector('body');
    const gameContainer = document.querySelector(".gameContainer");
        const score = document.querySelector(".score");
        const timer= document.querySelector(".timer");
        const lifeImg = document.querySelectorAll(".lifeSet__item");


        const gameView = document.querySelector(".gameView");    
        const viewRect = gameView.getBoundingClientRect();
        const BtnStart = document.querySelector(".BtnStart");
    
        const BtnReplay =document.querySelector(".gameView__replay__img");
        const replayView = document.querySelector(".gameView__replay");
        const alertView =document.querySelector(".alertView");

    // SoundSet //가져오기 
    const soundTrash = new Audio();
    soundTrash.src ="sound/trashSound.mp3";
    const soundAlert = new Audio();
    soundAlert.src ="sound/alert.wav";
    const gameBG = new Audio();
    gameBG.src ="sound/creativeminds.mp3";

//--------------------------------------------
// 전역변수 설정
let point=0;
let second=10;
let userLife = 3;
let ISStarted =false;
const IMG_SIZE =70;
const TRASH_COUNT = 6;
const FISH_COUNT = 4;
// 인터벌 clear할때 쓰려고 전역에 설정해두기 
let makeItemsId = undefined;
let countDownId = undefined;



function startGame(){
    ISStarted=true;
    BtnStart.style.visivility='hidden'; //startBtn보이지 않게 하기 
    //gameBG.play(); //BGM 플레이하기 
    startTimer(); //timer시작
    startMakingCharacters(); //캐릭터 생성
    showPoint(); //점수보여주기
}

function finishGame(){
    ISStarted=false;
    displayReplayView();
    stopTimer();
    stopMakingCharacters();
    //더이상 화면 클릭 안되도록 만들기 ISStarted=false니까.
}

function startTimer(){
    countDownId= setInterval(()=>{
        second--;  //1초씩 줄게하기. 인터벌 써서. 
        showRemainingTime(second); //남은시간보여주기 
        if(second==0){
            finishGame();   ////게임중단 🤢
            //메서드 안에서 어차피 stopTimer()됨.
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
    },1000);
}

function makeCharacters(){ //trash,fish 둘다 만들어줌 
    makeItem('trash',TRASH_COUNT,'img/trash.png');
    makeItem('fish',FISH_COUNT,'img/fish2.png');
}

function makeItem(className, count, imgSrc){
    for(i=0; i<count;i++){
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

function stopMakingCharacters(){
    clearInterval(makeItemsId);
}
function randomNum(min, max){
    return Math.random()*(max-min) +min;
}
function lifeDone(){
    userLife--; //2,1,0
    lifeImg[userLife].style.visivility='hidden';
    if(userLife==0){
        finishGame();  //게임중단 🤢
    }
}
function showPoint(){
    score.style.visivility = 'visible';
    score.innerHTML = `Your Score: ${point}`;
    point++;
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥이 메서드 쓸지 말지 고민 //
function getAllImgRemove(){
    const arrT = document.querySelectorAll(".trash");
    const arrF = document.querySelectorAll(".fish");
    arrT.forEach(trash=>trash.style.display='none');
    arrF.forEach(fish=>fish.style.display='none');
}


function pointUp(){
    score++;
}

// Click 이벤트 위임하기 
gameContainer.addEventListener('click',(event)=>{
         if(ISStarted==false){
             return;
         }
         if(className=='BtnStopBG'){
            gameBG.pause();
         }
         let target  = event.target;
         let className = target.className; 
         if(className=='BtnStart'){
             startGame();
             gameBG.play();
             alertView.style.display='none';
            }
        if(className=='trash'){
              playSound('trash');
              pointUp();
              target.remove();
          }
           else if(className=='fish'){
               soundAlert.play();
               lifeDone();
               target.remove();
               }
   
    });       

    BtnReplay.addEventListener('click',()=>{
        //reset시키기 
        ISStarted=false;
        point =0;
        score.innerHTML = `Your Score: ${point}`;
        userLife =3;
        for(let i=0; i<userLife; i++){
            lifeImg[i].style.visibility='visible';
        }
        second=15;
        showRemainingTime(second);
        replayView.style.display='none';    
        BtnStart.style.display='inline';  
    });




