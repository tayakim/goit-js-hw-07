const categories = document.querySelector('ul').children;
console.log(`В списке ${categories.length} категории.`);

Object.values(categories).forEach(cate => console.log(`Категория: ${cate.firstElementChild.textContent}`));
Object.values(categories).forEach(cate => console.log(`Количество элементов: ${cate.lastElementChild.getElementsByTagName('li').length}`));