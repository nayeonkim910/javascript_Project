const view = document.querySelector('.gameView');
const viewRect = view.getBoundingClientRect();
const startBtn = document.querySelector('.startBtn');
console.log(viewRect);


function displayBug(){
    const bugBox = document.createElement('img');
    let randomX = Math.floor(Math.random()*10+1);
    let randomY = Math.floor(Math.random()*10+1);
    bugBox.setAttribute('src','img/bug.png');
    bugBox.setAttribute('class','bugBox');
    bugBox.style.left = `"translateX("${randomX}")"`;
    bugBox.style.top = `translateY("${randomY}")`;
    view.appendChild(bugBox);
}

startBtn.addEventListener('click',(event)=>{
    displayBug();
    console.log('벌레생성');
})


