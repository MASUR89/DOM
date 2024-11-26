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
// const yuti1 = document.getElementsByClassName("box5")[0];
// yuti1.textContent = "changed"

// const yuti2 = document.querySelectorAll(".box5")[1];
// yuti2.style.color = "red"

//---------------listis damateba-----------------------
// const uli = document.createElement("ul");
// uli.className = "sia"

// const listi1 = document.createElement("li")
// const listi2 = document.createElement("li")
// const listi3 = document.createElement("li")

// listi1.textContent = "erti";
// listi1.style.backgroundColor = "green"

// listi2.textContent = "ori";
// listi2.style.backgroundColor = "grey";

// listi3.textContent = "sami";
// listi3.style.backgroundColor = "red"

// uli.appendChild(listi1);
// uli.appendChild(listi2);
// uli.appendChild(listi3);
// document.body.appendChild(uli)

//-------------------------------------------------
const text = "    This is My to do List."
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.indexOf("do"));
console.log(text.slice(0,10));
console.log(text.substring(6));
console.log(text.replace("My", "your"));
console.log(text.trim());
console.log(text.split(" "));

//----------------ternary operator----------------------------------
const qula = 88;
const grade = qula >= 91 ? "A": "Not A"
console.log(grade);

//-----------------------------------------------
count = 3 ;
do {
    console.log(` count is ${count}`)
    count++;
} while (count <= 6)


for (let p = 0; p < 5; p++) {
console.log(`itteration ${p}`);
}

// for (let i = 10; i <= 30; i++) {
//     console.log(i);
// }


const text2 = "what kind of text is this"
const words = text2.split(" ") //ეს ტექსტს აქცევს მასივად
for( let i = 0; i < words.length; i++) {
    if (words[i].includes("t")){
        words[i] = "Found"
    }
}
console.log(words.join(" "));


const xili = ["ვაშლი", "კივი", "მსხალი", "ნესვი", "ატამი", "ყურძენი", ];
for(let i = 0; i < xili.length; i++) {
    if(xili[i].includes("ა")) {
        xili[i] = "ნაპოვნია"
    }
}
console.log(xili.join(" "));

//----------------------array, array methods
//---------push, დამატება ბოლოში
let sportType = ["ცურვა", "ტანვარჯიში"]
console.log("სპორტის სახეობები:", sportType);

sportType.push("ხელბურთი", "მძლეოსნობა")
console.log("უფრო ვრცელი ჩამონათვალი:", sportType);
//-----------pop, ბოლო ელემენტის ამოღება მასივიდან
let last = sportType.pop()
console.log(last);
console.log(sportType);
//--task
let list = ["movie1", "movie2", "movie3", "movie4"]
console.log("initial list:",  list);
let worst = list.pop()
console.log("my list:", list);
console.log("the worst movie:", worst);

//------------------shift, unshift - remove & add first
let first = list.shift()
console.log(list);
console.log(first);
list.unshift("some movie");
console.log(list);
//--task
let fruit = ["ვაშლი", "კივი", "მსხალი", "ნესვი", "ატამი", "ყურძენი", ];
console.log(fruit);
let oldFruit = fruit.shift();
console.log(fruit);
console.log(oldFruit);
fruit.unshift("ქლიავი")
console.log(fruit);
//--task
let sia = ["ana", "bana", "gana",];
sia.pop();
sia.unshift("dana");
sia.shift();
console.log(sia);
//--
let toDo = [];
toDo.push("gym", "cleaning", "washing", "ironing");
toDo.shift();
toDo.pop();
console.log(toDo);
//--task----add 5 to each
let number = [10, 20, 30, 40, 50];
number.push(60);
number.shift();
for(let i = 0; i < number.length; i++) {
    console.log(number[i] + 5);
}

let sum = 0;
let j = 0;
while  (j < number.length) {
    sum += number[j];
    j++
}
console.log("total:", sum);

let studentebi = [
    {name: "nana", score: 100},
    {name: "nunu", score: 90},
    {name: "nini", score: 80}
]
studentebi.push({name: "dodo", score: 97},{name: "dada", score: 87})
console.log(studentebi);
let minscore = 0;
let i = 0;
do {
    if (studentebi[i].score < studentebi[minscore].score) {
        minscore = i;
    }
    i++
}while ( i < studentebi.length)
    studentebi.splice(minscore, 1)
    console.log(studentebi);

for (let i = 0; i < studentebi.length; i++) {
    let status = studentebi[i].score >= 90 ? "Passed" : "Failed";
    console.log((`${studentebi[i].name} ${status}`));
}

//------26.11.24-------------array methods
//-------map--მოქმედებს მასივის ყველა წევრზე
const num5 = [1, 2, 3, 4];
const double = num5.map(nnum => nnum * 2);
console.log(double);

const produ = [
    {price: 100},
    {price: 200},
    {price: 300}
]
const axali = produ.map(produ => produ.price * 2.7 + " Gel");
console.log(axali);

//=====task=====
const cels = [ 2, 10, 15, 20]
const celsi = cels.map(celsi => celsi * 9/5 + 32 + " F");
console.log(celsi);

//------filter----ფილტრავს მითითებული თვისების მქონე წევრებს
const num6 = [ 2, 10, 15, 20];
const evens = num6.filter(num => num %2 === 0);
console.log(evens);

//--გავფილტრეთ სიტყვები, რომლებიც იწყება ასოთი "g"
const words26 = ["gym", "cleaning", "washing", "going"];
const words262 = words26.filter(word => word[0] === "g");
console.log(words262);

//=====task=====
const passwords = ["adamiani123","kaciaadamiani202","aqvarme123","arashendi"];
const passa = passwords.filter(pass => pass[0] === "a");
console.log(passa);
const leng = passa.map(pass => pass.length >= 8);
console.log(leng);

//-------reduce---მასივის წევრები დაყავს ერთ წევრამდე
const num8 = [6, 2, 3, 4];
const summ = num8.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(summ);
const namravli = num8.reduce((acc, mun) => acc * mun, 1);
console.log(namravli);

//------concat --- მასივების გაერთიანება (ძირითადად 2 მაასივისთვის გამოიყენება)
const array1 = [1,3,5];
const array2 = [2,4,6];
const gaerTianeba = array1.concat(array2);
console.log(gaerTianeba);

//---------spread ---მასივების გაერთიანების უკეთესი მეთოდი
const array3 = ["koka", "gvantsa"];
const array4 = ["luka", "nino"];
const array5 = ["gogo", "biWi"]
const spredi = [...array3, ...array5, ...array4];
console.log(spredi);

//=====task=====
const one = [1,2,3];
const two = [4,5,6];
const three = [7,8];
const jami = [...one, ...two, ...three];
const dajameba = jami.reduce((erti, ori) => erti + ori, 0);
console.log(dajameba);

//-----------