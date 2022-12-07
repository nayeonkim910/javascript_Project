const content = document.querySelector(".content");
const textBox = document.querySelector(".textBox");
const list = document.querySelector(".list");
const Btn =document.querySelector(".Btn");
 
Btn.addEventListener('click',()=>{
    const listItem = document.createElement("li");
    const icon = document.createElement("i");
    icon.setAttribute("class","fa-regular fa-xl fa-circle-check");
    listItem.innerHTML = `${textBox.value}`;
    list.appendChild(listItem);
    list.appendChild(icon);
    textBox.value ='';
    console.log(listItem);
});
  
  
  
  
 
 
 
 
