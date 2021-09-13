let titre = document.querySelector('title');
console.log(titre);

document.querySelector('title').textContent = 'Modifying the DOM';
console.log(titre);
let dybo = document.body.children;
let arr = [dybo]
for(let elem of dybo){
    console.log(elem);
}
let min = 1;
let max = 255;
function R(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;;
  }
let a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(a);
let b = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(b);
let c = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(c);
document.body.style.backgroundColor=`rgb(${a},${b},${c})`;
