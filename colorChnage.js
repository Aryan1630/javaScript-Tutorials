const color = ['red','blue','green','yellow','purple','violet'];
const bodyBack = document.querySelector('body');
const colorChange  = document.querySelector('.colorbtn');

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    var random = Math.floor(Math.random() * color);
    bodyBack.style.background = color[random];
}