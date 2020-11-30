const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


let list = document.getElementById('ingredients');
let li = document.createElement('li');


// Option 1
ingredients.forEach(ingredient => {
    list.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`)
});


// Option 2
ingredients.forEach(ingredient => {
    let li = document.createElement('li');
    li.innerHTML = ingredient;
    list.appendChild(li);
});