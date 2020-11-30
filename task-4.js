const buttonDecrement = document.querySelector('[data-action = decrement]');
// console.log(buttonDecrement);
const buttonIncrement = document.querySelector('[data-action = increment]');
// console.log(buttonIncrement);
const count = document.querySelector('#value');
// console.log(count);
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    count.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    count.textContent = counterValue;
}

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);