const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;
let counterValue = document.querySelector('#value');
let value = 0;

decrementBtn.addEventListener('click', (decrement) => {
    value--;
    counterValue.innerHTML = value;
});
 incrementBtn.addEventListener('click', (increment) => {
    value++;
    counterValue.innerHTML = value;
});   
