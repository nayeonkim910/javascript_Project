const t = document.querySelector(".T");
const sk =document.querySelector(".S");
const pt = document.querySelector(".PT");
const yel = document.querySelector(".Y");
const pin = document.querySelector(".P");
const blu = document.querySelector(".B");

const content = document.querySelector(".content");

const sk_pin = '<img src="img/pink_s.png">';
const sk_yel ='<img src="img/yellow_s.png">';
const sk_blu = '<img src="img/blue_s.png" >';
const sk_p_de = 'female, small ';
const sk_y_de = 'female, large ';
const sk_b_de = 'female, midium ';
// const skSet = [sk_pin, sk_blu,sk_yel];

sk.addEventListener('click',()=>{
    const contentItemBox = document.createElement("div");
    contentItemBox.setAttribute('class', 'content__item');
    console.log('z클릭됨');
    const item__img = document.createElement('div');
    item__img.setAttribute('class', 'item__img');
    item__img.innerHTML=sk_pin;
    contentItemBox.appendChild(item__img);
  const item__description = document.createElement('div');
   item__description.setAttribute('class', 'item__description');
   item__description.innerText= 'female';
   contentItemBox.appendChild(item__description);
   content.appendChild(contentItemBox);
})
