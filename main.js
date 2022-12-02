const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinates = document.querySelector(".coordinates");

document.addEventListener("mousemove",(e)=> {
    let x = e.clientX;
    let y = e.clientY;
    coordinates.innerHTML= `${x}, ${y}`;
    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
    coordinates.style.top= `${y}px`;
    coordinates.style.left= `${x}px`;
    target.style.top = `${y}px`;
    target.style.left =`${x}px`;

});
var sf = new Snowflakes({
    color: "rgb(192, 220, 249)", 
    count: 150, 
    minOpacity: 0.2, 
    maxOpacity: 0.8  
});