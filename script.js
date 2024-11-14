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

// const elementNode = document.createElement("div");
// const textNode = document.createTextNode("good day");

// elementNode.appendChild(textNode);
// document.body.appendChild(elementNode)


// const parag = document.createElement("p");
// const text = document.createTextNode("new text");

// parag.className = "par1";
// text.textContent = "this is very interesting"

// parag.appendChild(text);
// document.body.appendChild(parag)

//--------------------დივები და შიგთავსი--------------------------
// const boxOne = document.createElement("div");
// boxOne.className = "box1";

// const headerOne = document.createElement("h2");
// headerOne.textContent = "This is tex 1";

// boxOne.appendChild(headerOne);
// document.body.appendChild(boxOne)


// const boxTwo = document.createElement("div");
// boxTwo.className = "box2";

// const headerTwo = document.createElement("h3");
// headerTwo.textContent = "This is text 2";

// boxTwo.appendChild(headerTwo);
// document.body.appendChild(boxTwo)

//-----------------სექცია და დივები-----------------------
// const seqcia = document.createElement("section");
// seqcia.className = "section1"

// const boxOne = document.createElement("div");
// boxOne.className = "box1";
// boxOne.textContent = "box one"

// const boxTwo = document.createElement("div");
// boxTwo.className = "box2";
// boxTwo.textContent = "box two"

// seqcia.appendChild(boxOne);
// seqcia.appendChild(boxTwo);
// document.body.appendChild(seqcia)

//--------------------------------------
const yuti1 = document.getElementsByClassName("box5")[0];
yuti1.textContent = "changed"

const yuti2 = document.querySelectorAll(".box5")[1];
yuti2.style.color = "red"

//---------------listis damateba-----------------------
const uli = document.createElement("ul");
uli.className = "sia"

const listi1 = document.createElement("li")
const listi2 = document.createElement("li")
const listi3 = document.createElement("li")

listi1.textContent = "erti";
listi1.style.backgroundColor = "green"

listi2.textContent = "ori";
listi2.style.backgroundColor = "grey";

listi3.textContent = "sami";
listi3.style.backgroundColor = "red"

uli.appendChild(listi1);
uli.appendChild(listi2);
uli.appendChild(listi3);
document.body.appendChild(uli)

