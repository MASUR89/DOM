// const head = document.querySelector('.header');
// head.style.color = 'red';

// const names = document.getElementById('name');
// names.innerHTML = '<h1> mai </h1>';

// const par = document.getElementsByTagName('p')[0];
// par.innerHTML = '<p> this text should be added </p>';

const newElem = document.createElement('li');
newElem.textContent = 'add this';
document.querySelector('.main').appendChild(newElem);

const button = document.getElementById('btn1');
button.addEventListener('click', function(){
    console.log('button is clicked');
})

const header = document.querySelector('.header');
header.addEventListener('mouseenter', function() {
    header.style.color = 'red'
})

document.addEventListener('keydown', (event) => {
    console.log('object');
})

// console.log(head);

// const names = document.getElementById('name');
// console.log(names);

// const par = document.getElementsByTagName('p');
// console.log(par);

// const text = document.querySelectorAll('main');
// console.log(text);

