const inputRange = document.getElementById('font-size-control');
// console.log(inputRange);

const text = document.getElementById('text');
// console.log(text);

inputRange.addEventListener('change', event => {
    text.style.fontSize = event.target.value + 'px'
});