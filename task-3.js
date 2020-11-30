const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const ul = document.querySelector('ul');
ul.style.display = 'flex';
// ul.style.padding = '150px';
ul.style.justifyContent = 'space-between';

images.forEach(image => {
    let li = document.createElement('li');
    let img = document.createElement('img');

    img.setAttribute('src', image.url);
    img.setAttribute('alt', image.alt);
    img.setAttribute('width', '300');
    img.setAttribute('style', 'border: 1px solid black');

    ul.appendChild(li);
    li.appendChild(img);

});