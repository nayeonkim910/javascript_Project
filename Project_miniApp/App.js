const content = document.querySelector(".content");
const textBox = document.querySelector(".textBox");
const Btn =document.querySelector(".Btn");

Btn.addEventListener('click',()=>{
    const listItem = document.createElement('div');
    const icon = document.createElement('div');
    icon.innerHTML='<i class="fa-regular fa-xl fa-circle-check"></i>';
    icon.setAttribute('class','iconDiv');
    listItem.setAttribute('class','listItem');
    listItem.textContent=`${textBox.value}`;
    textBox.value='';
    content.appendChild(listItem);
    listItem.appendChild(icon);
        let IsLine;
         icon.addEventListener('click',()=>{
            listItem.style.textDecorationLine= IsLine===true?"none":"line-through";
            IsLine = IsLine === true? false : true;
            console.log(IsLine);
            });
})
