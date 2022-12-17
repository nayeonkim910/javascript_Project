
const body = document.querySelector('body');
    const gameView = document.querySelector('.gameView');
    const gameA = document.querySelector(".gameImgA");
    const gameB = document.querySelector(".gameImgB");
    const gameC = document.querySelector(".gameImgC");
    


    // -----------------second
const secondBG = document.querySelector('.secondBG');
    const checkBox = document.querySelectorAll(".checkBox");


    // -----------------third
const thirdBG = document.querySelector('.thirdBG');
// const other = document.querySelector('.otherBtn')



// -----------------fourth
const fourthBG = document.querySelector(".fourthBG");
// const fourthRect = fourthBG.getBoundingClientRect();

const f_BtnStart = document.querySelector(".f_BtnStart");
    const score = document.querySelector(".score");
    const timer= document.querySelector(".timer");

    const f_gameView = document.querySelector(".f_gameView");    
    const viewRect = f_gameView.getBoundingClientRect();
    

//---------------sound
const BG = new Audio("../sound/bg.mp3");
const SoundWin = new Audio("../sound/game_win.mp3");
const SoundCheck = new Audio("../sound/carrot_pull.mp3");
const SoundAlert = new Audio("../sound/alert.wav");
const homeBG = new Audio("../sound/theduel.mp3");
const BtnStopBG = document.querySelector(".BtnStopBG");
   

 

BtnStopBG.addEventListener('click',()=>{
    BG.pause();
});

gameA.addEventListener('click',()=>{
    BG.play();
    seamless.scrollIntoView(secondBG,{behavior: "smooth", block: "center"});
    //스크롤내려서 두번째 화면 보이게 만들기
});



gameC.addEventListener('click',()=>{
    homeBG.play();
    seamless.scrollIntoView(fourthBG,{behavior: "smooth", block: "center"});
});

//게임화면 나오기
//게임 시작
//타이머 만들기 

// secondBG.scrollIntoView();

// 게임시작하는 함수 만들기 gameStart();

 
let ch=0;
    checkBox.forEach((item)=>{
             
             item.addEventListener('click',()=>{
                     item.style.opacity=1;
                     ch ++;
                     SoundCheck.play();
                     if(ch==8){
                        SoundWin.play();
                       
                    }
                 });
           
        });
function randomNum(min, max){
    return Math.random()*(max-min) +min;
}


//----------------------------------------------4번 화면 당근찾기 ----------
 
// 타이머 몇초 할지 설정하고, 첫화면에 띄우기 
//타이머 동작하기 ----------------------------------------
function showTimer(second){
    let min =Math.floor(second/60);
    timer.innerHTML=`${min<10?0:''}${min}:${second<10?0:''}${second}`;
    MakeIntervalItems(second);
}

//타이머 -1씩 인터벌 동작
function StartCountdown(second){
         let CountdownId;
         CountdownId =setInterval(()=>{  
            second--;  
            showTimer(second);
            if(second<=0){
                clearInterval(CountdownId);        
          }
        },1000);
          
}









//-------------------
function makeItem(className,count,ImgSrc){
       for(i=0; i<count; i++){
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
            f_gameView.appendChild(item);
    }
};

function MakeItems(){
    makeItem('carrot',1,'img/carrot.png');
    makeItem('bug',1,'img/bug.png'); 
}
//1초마다 makeItem틀에 /설정 넣어서 당근 생성하기 함수

function MakeIntervalItems(sec){
        console.log(sec);
        let MakeItemsId;
        MakeItemsId=setInterval(MakeItems,1000); //point 생성중
        setTimeout(()=>{clearInterval(MakeItemsId); getAllImgRemove();  },sec*1000);
        
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
//네번째 페이지 Click 이벤트 위임하기 
fourthBG.addEventListener('click',(event)=>{
    let second=10;
    let item = event.target;
    let className =event.target.className; 
    //item고르면 삭제하고 
     if(item.nodeName=='IMG'){

            if(className==='carrot'){
                SoundCheck.play();
                 showPoint();
                 event.target.remove();               
            }

             else if(className=='bug'){
                 SoundAlert.play();
             }
         //시작버튼 누르면 시작표시 사라지고, 게임 시작
     }
     if(className=='f_BtnStart'){
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
    
//--------------------------------------





function getAllImgRemove(){
    const arrC = document.querySelectorAll(".carrot");
    const arrB = document.querySelectorAll(".bug");
    arrC.forEach(carrot=>carrot.style.display='none');
    arrB.forEach(bug=>bug.style.display='none');
}