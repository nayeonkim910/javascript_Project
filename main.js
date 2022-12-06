



const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const coordinates = document.querySelector(".coordinates");
const target = document.querySelector(".target");
const coordiT = target.getBoundingClientRect();
targetHafWid = coordiT.width/2;
targetHafHei = coordiT.height/2;


document.addEventListener("mousemove",(e)=> {
    const x = e.clientX;
    const y = e.clientY;
    coordinates.innerHTML = `${x}px, ${y}px`;
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;     
    target.style.transform = `translate(${x-targetHafWid}px, ${y-targetHafHei}px)`
    coordinates.style.transform = `translate(${x+15}px, ${y+30}px)`;

  
//top이나 left를 계속해서 변경하면 성능떨어져.
//translate를 써서 이동시킬 방법 찾자.
});
//눈내리는 기능 컬러,개수,최소투명도,최대투명도  
// var sf = new Snowflakes({
    // color: "rgb(192, 220, 249)", 
    // count: 150, 
    // minOpacity: 0.2, 
    // maxOpacity: 0.8  
// });