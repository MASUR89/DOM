// const head = document.querySelector('.header');
// head.style.color = 'red';

// const names = document.getElementById('name');
// names.innerHTML = '<h1> mai </h1>';

// const par = document.getElementsByTagName('p')[0];
// par.innerHTML = '<p> this text should be added </p>';

// const newElem = document.createElement('li');
// newElem.textContent = 'add this';
// document.querySelector('.main').appendChild(newElem);

// const button = document.getElementById('btn1');
// button.addEventListener('click', function(){
//     console.log('button is clicked');
// })

// const header = document.querySelector('.header');
// header.addEventListener('mouseenter', function() {
//     header.style.color = 'red'
// })

// document.addEventListener('keydown', (event) => {
//     console.log('object');
// })

// console.log(head);

// const names = document.getElementById('name');
// console.log(names);

// const par = document.getElementsByTagName('p');
// console.log(par);

// const text = document.querySelectorAll('main');
// console.log(text);

const elementNode = document.createElement("div");
const textNode = document.createTextNode("good day");

elementNode.appendChild(textNode);
document.body.appendChild(elementNode)


const parag = document.createElement("p");
const text = document.createTextNode("new text");

parag.className = "par1";
text.textContent = "this is very interesting"

parag.appendChild(text);
document.body.appendChild(parag)




const boxOne = document.createElement("div");
const headerOne = document.createElement("h2");

boxOne.className = "box1";
headerOne.textContent = "This is tex 1";
boxOne.appendChild(headerOne);
document.body.appendChild(boxOne)

const boxTwo = document.createElement("div");
const headerTwo = document.createElement("h3");

boxTwo.className = "box2";
headerTwo.textContent = "This is text 2";
boxTwo.appendChild(headerTwo);
document.body.appendChild(boxTwo)