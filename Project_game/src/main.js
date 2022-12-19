
const body = document.querySelector('body');
    const gameView = document.querySelector('.gameView');
    const gameA = document.querySelector(".gameImgA");
    const gameB = document.querySelector(".gameImgB");
    const gameC = document.querySelector(".gameImgC");
    

//-----------------second-----------------
const secondBG = document.querySelector('.secondBG');
    const checkBox = document.querySelectorAll(".checkBox");

//----------------fourthd-------------------
const fourthBG = document.querySelector(".fourthBG");
// const fourthRect = fourthBG.getBoundingClientRect();

const f_BtnStart = document.querySelector(".f_BtnStart");
    const score = document.querySelector(".score");
    const timer= document.querySelector(".timer");

    const f_gameView = document.querySelector(".f_gameView");    
    const viewRect = f_gameView.getBoundingClientRect();
    const lifeImg = document.querySelectorAll(".lifeSet__item");
    const replayBtn =document.querySelector(".f_gameView__replay");
    const doneView = document.querySelector(".f_gameView__done");
    const alertView =document.querySelector(".alertBeforeStart");

//---------------sound-----------------
const BG = new Audio("../sound/bg.mp3");
const SoundWin = new Audio("../sound/game_win.mp3");
const SoundCheck = new Audio("../sound/carrot_pull.mp3");
const SoundAlert = new Audio("../sound/alert.wav");
const homeBG = new Audio("../sound/creativeminds.mp3");
const BtnStopBG = document.querySelector(".BtnStopBG");    

BtnStopBG.addEventListener('click',()=>{
    BG.pause();
});

gameA.addEventListener('click',()=>{
    BG.play();
    seamless.scrollIntoView(secondBG,{behavior: "smooth", block: "center"});
     
});

gameC.addEventListener('click',()=>{
    homeBG.play();
    seamless.scrollIntoView(fourthBG,{behavior: "smooth", block: "center"});
});




//---------------------------------------------4 ----------
// 게임시작하는 함수 만들기 gameStart();
// let ch=0;
let checkedBox = new Object();


checkBox.forEach((item,index)=>{
             item.addEventListener('click',()=>{
                 item.style.opacity=1;
                    checkedBox[index]= 'ok';
                    console.log(checkedBox);
                     SoundCheck.play();
                    if(Object.keys(checkedBox).length==8){
                        SoundWin.play();
                    }
                 });
        });







function randomNum(min, max){
    return Math.random()*(max-min) +min;
}






//---------------------------------------------당근찾기  화면 ----------
let userLife = 3;

function showTimer(second){
    let min =Math.floor(second/60);
    timer.innerHTML=`${min<10?0:''}${min}:${second<10?0:''}${second}`;
    MakeIntervalItems(second,userLife);
}

//타이머 -1씩 인터벌 동작
function StartCountdown(second){
         let CountdownId;
         CountdownId =setInterval(()=>{  
            second--;  
            showTimer(second);
            if(second<=0||userLife==0){
                clearInterval(CountdownId);
                const done = document.querySelector(".f_gameView__done");
                done.style.display='inline';       
          }
        },1000);
          
}
function makeItem(className,count,ImgSrc){
       for(i=0; i<count; i++){
    console.log(ISStarted);
            const MIN_X=0;
            const MAX_X=viewRect.width-70;
            const MIN_Y=0;
            const MAX_Y=(viewRect.height-70);
            const x = Math.floor(randomNum(MIN_X,MAX_X));
            const y = Math.floor(randomNum(MIN_Y,MAX_Y));
            const item = document.createElement('img');
            item.setAttribute('src',ImgSrc);
            item.setAttribute('class',className);
            item.style.right= x+"px";
            item.style.bottom= y+"px";
            if(second>0&&userLife>0&&ISStarted){
                f_gameView.appendChild(item);
            }
            
    }
};


function MakeItems(){
    makeItem('carrot',3,'img/trash.png');
    makeItem('bug',2,'img/fish2.png');  //fish잡으면 안됨 
}
function lifeDone(){
    userLife--; //2,1,0
    lifeImg[userLife].style.display='none';
}
function MakeIntervalItems(sec){
    let MakeItemsId;
        MakeItemsId=setInterval(MakeItems,2000); //point 생성중
        setTimeout(()=>{clearInterval(MakeItemsId); },sec*1000);
    } 
function timerDone(){
    timer.style.display ='none';
}
let point=0;
function showPoint(){
    score.style.display = 'inline'
    score.innerHTML = `Your Score: ${point}`;
    point++;
}
function getAllImgRemove(){
    const arrC = document.querySelectorAll(".carrot");
    const arrB = document.querySelectorAll(".bug");
    arrC.forEach(carrot=>carrot.style.display='none');
    arrB.forEach(bug=>bug.style.display='none');
}
//네번째 페이지 Click 이벤트 위임하기 
let second=10;
let ISStarted =false;

fourthBG.addEventListener('click',(event)=>{
    
    let item = event.target;
    let className =event.target.className; 
    if(item.nodeName=='IMG'){
                      if(className==='carrot'){
                          SoundCheck.play();
                           showPoint();
                           event.target.remove();
                      }
                       else if(className=='bug'){
                           SoundAlert.play();
                           lifeDone();
                           console.log('유저라잎',userLife);
                           event.target.remove();
                           }
        }

         if(className=='f_BtnStart'){
            alertView.style.display='none';
            ISStarted=true;
            showPoint();
            MakeItems();
            f_BtnStart.style.display='none';
            showTimer(second);//=> MakeIntervalItems(second)
            StartCountdown(second);
        }
         if(className=='BtnStopBG'){
             homeBG.pause();
         }
});       

replayBtn.addEventListener('click',()=>{
    ISStarted=false;
    getAllImgRemove();
    point =0;
    score.innerHTML = `Your Score: ${point}`;
    userLife =3;
    for(i=0; i<userLife; i++){
        lifeImg[i].style.display='inline';
    }
    second=10;
    showTimer(second);
    doneView.style.display='none';    //done없애고
    f_BtnStart.style.display='inline';  //setart보여주고
})




