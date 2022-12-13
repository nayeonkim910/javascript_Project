const content = document.querySelector(".content");
const textBox = document.querySelector(".textBox");
const Btn =document.querySelector(".Btn");


function addItem(){
    const text = textBox.value; //값있다면 넘겨주기
    if(text==''){
        textBox.focus();
        return; //종료하기
    }
    console.log(text);
    const item = addItemBox(text); //return해주는거 넣기
    content.appendChild(item);
    item.scrollIntoView({block: 'center'});
    textBox.value='';
    textBox.focus();
  
}
function addItemBox(text){
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'listItem');
    listItem.innerHTML=`
    <div class="listItem__text">${text}</div>
    <div class="listItem__icon">
        <div class="icon__check"><i class="fa-regular fa-lg fa-circle-check"></i></div>
        <div class="icon__trash"><i class="fa-solid fa-lg fa-trash"></i></div>
    </div>
    `;
    return listItem;
}

Btn.addEventListener('click',()=>{
    //value있는지 체크하고, 추가하도록
    addItem();
});

textBox.addEventListener('keypress',(e)=>{
    if (e.key==='Enter') {
        addItem();
    }

});