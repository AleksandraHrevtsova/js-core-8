import data from './data.js';
console.log('8', data);

const newElement = `<section><h1 class='title' id='newElementTitle'>Hello World!</h1></section>`;
// console.log(newElement);
// document.querySelector('body').innerHTML = '';
document.querySelector('body').insertAdjacentHTML('afterbegin', newElement);


// ================== NODE ELEMENT ==================
const text = document.createElement('p')
// console.dir(text);
text.textContent =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, ullam!';

const insertTitle = document.getElementById('newElementTitle');
// console.log(insertTitle);
// insertTitle.before(text);
insertTitle.insertAdjacentElement('afterend', text)

const products = data
  .map(product => {
    const { title, price } = product;
    return `<li>
                <h3>name: ${title}</h3>
                <p>price: ${price}</p>
            </li>`;
  })
  .join('');

const productsList = document.getElementById('productsList');
productsList.insertAdjacentHTML('afterbegin', products);

// CLONE

const cloneProductsList = productsList.cloneNode(true);
console.log(cloneProductsList);

// DELETE
// document.querySelector('.products').removeChild(productsList);
productsList.remove()