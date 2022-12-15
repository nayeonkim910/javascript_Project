
const body = document.querySelector('body');
const gameView = document.querySelector('.gameView');
const gameA = document.querySelector(".gameImgA");
const gameB = document.querySelector(".gameImgB");
const secondBG = document.querySelector('.secondBG');
const thirdBG = document.querySelector('.thirdBG');
const other = document.querySelector('.otherBtn')
const checkBox = document.querySelectorAll(".checkBox");

const BG = new Audio("../sound/bg.mp3");
const SoundWin = new Audio("../sound/game_win.mp3");
const SoundCheck = new Audio("../sound/carrot_pull.mp3");
// document.addEventListener('click',(e)=>{//위치꺼내고 
    //const x=  e.clientX;
    // const x=  e.pageX;
    // const y = e.pageY;
    //const y = e.clientY;
    // const item= makeStar(x, y);//위치넣어서 만들기
    // body.appendChild(item);
    // console.log('클릭됨');
// });
// 
//별만들기
// function makeStar(x, y){
    // const star = document.createElement('img');
    // star.setAttribute('class', 'star');
    // star.setAttribute('src','img/fire.png');
    // star.style.left =x+"px";
    // star.style.top = y+"px";
    // console.log('위치넣어짐');
    // return star;
// }



gameA.addEventListener('click',()=>{
    // BG.play();
    seamless.scrollIntoView(secondBG,{behavior: "smooth", block: "center"});
    //스크롤내려서 두번째 화면 보이게 만들기
});
gameB.addEventListener('click',()=>{
    seamless.scrollIntoView(thirdBG,{behavior: "smooth", block: "center"});
})

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
 
 
 
 
 
 
 
 
 
 