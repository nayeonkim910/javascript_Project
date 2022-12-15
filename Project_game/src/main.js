
const body = document.querySelector('body');
const gameView = document.querySelector('.gameView');
const secondBG = document.querySelector('.secondBG');
const thirdBG = document.querySelector('.thirdBG');
const other = document.querySelector('.otherBtn')
const BG = new Audio("../bg.mp3");

document.addEventListener('click',(e)=>{//위치꺼내고 
    const x=  e.clientX;
    const y = e.clientY;
    const item= makeStar(x, y);//위치넣어서 만들기
    body.appendChild(item);
    console.log('클릭됨');
});

//별만들기
function makeStar(x, y){
    const star = document.createElement('img');
    star.setAttribute('class', 'star');
    star.setAttribute('src','img/fire.png');
    star.style.left =x+"px";
    star.style.top = y+"px";
    console.log('위치넣어짐');
    return star;
}

gameView.addEventListener('click',()=>{
    BG.play();
    seamless.scrollIntoView(secondBG,{behavior: "smooth", block: "center"});
    //스크롤내려서 두번째 화면 보이게 만들기
});
other.addEventListener('click',()=>{
    seamless.scrollIntoView(thirdBG,{behavior: "smooth", block: "center"});
})

//게임화면 나오기
//게임 시작
//타이머 만들기 

// secondBG.scrollIntoView();

// 게임시작하는 함수 만들기 gameStart();