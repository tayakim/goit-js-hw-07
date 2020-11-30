const inputForm = document.querySelector('#validation-input');
console.log(inputForm);

let inputLength = inputForm.getAttribute('data-length');
console.log(inputLength);

let inputPlaceholder = inputForm.getAttribute('placeholder');
console.log(inputPlaceholder);

let totLength = parseInt(inputLength);

inputForm.addEventListener('blur', () => {
    if (inputForm.value.length === totLength) {
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');

        // console.log('Фокус');
    } else {
        inputForm.classList.add('invalid');
        inputForm.classList.remove('valid');
        // console.log('ne Фокус');
    }
});