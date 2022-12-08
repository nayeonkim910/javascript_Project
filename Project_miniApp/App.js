const content = document.querySelector(".content");
const textBox = document.querySelector(".textBox");
const Btn =document.querySelector(".Btn");

Btn.addEventListener('click',()=>{
    let IsValue=textBox.value===''? false : true;
    if(IsValue){
    const listItem = document.createElement('div');
    const iconBox = document.createElement('div');
    const icon = document.createElement('div');
    const iconTrash = document.createElement('div');
    iconTrash.innerHTML='<i class="fa-solid fa-lg fa-trash"></i>';
    icon.innerHTML='<i class="fa-regular fa-lg fa-circle-check"></i>';
    icon.setAttribute('class','iconDiv');
    iconBox.setAttribute('class','iconBox')
    iconTrash.setAttribute('class','iconDiv');
    listItem.setAttribute('class','listItem');
    listItem.textContent=`${textBox.value}`;
    textBox.value='';
    content.appendChild(listItem);
    listItem.appendChild(iconBox);
    iconBox.appendChild(icon);
    iconBox.appendChild(iconTrash);

        let IsLine;
         icon.addEventListener('click',()=>{
            listItem.style.textDecorationLine= IsLine===true?"none":"line-through";
            IsLine = IsLine === true? false : true;
            console.log(IsLine);
            });
        iconTrash.addEventListener('click',()=>{
            listItem.remove();
        });
        }        
})
