import './createElements.js';

const items = document.querySelectorAll('.mainList li');
console.log(items);
items.forEach((item, idx, array)=>{
    // console.log('index:', idx);
    // console.log('array:', array[idx]);
    if(idx % 2 === 0){
        // console.dir(item);
        item.style.backgroundColor = 'red';
        // console.log(item.style.backgroundColor);
        item.textContent = 'Hello'
    }else{
        item.style.backgroundColor = 'green';
    }
})

const mainTitleBySelector = document.querySelector('#mainTitle');
// console.log('mainTitleBySelector', mainTitleBySelector);

const mainTitleById = document.getElementById('mainTitle');
// console.log('mainTitleById', mainTitleById);

const itemsByClass = document.getElementsByClassName('item')
console.log('itemsByClass', itemsByClass);

// [...itemsByClass].forEach( el => console.log(el))