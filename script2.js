//---getting data from api

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const list = document.createElement("ul");
    data.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name; 
        list.appendChild(listItem); 
    });
    document.body.appendChild(list);
})
.catch(error => console.error("Error fetching data:", error));
//--------------------
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new error ("bad response")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
//--------------------------

//-- სტატუსის გამოტანა
// if (status === 200) {
//     console.log('200 OK: request was successful');
//     return await response.json();
// }

//-------------- 12/12/24 ---------regex
const usernamePattern = /^[a-zA-Z0-9][a-zA-Z0-9_-]{1,18}[a-zA-Z0-9]$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

const myName = "maiamaia";
const myEmail = "surmava9@gmail.com";
const myPassword = "asds8989"

if (usernamePattern.test(myName)) {
    console.log("Valid");
}else {
    console.log("Invalid");
}
if (emailPattern.test(myEmail)) {
    console.log("valid mail");
}else {
    console.log("invalid mail");
}
if (passwordPattern.test(myPassword)) {
    console.log("valid password");
}else {
    console.log("invalid password");
}

//-------------------------------17/12/24-----ბრაუზერში მონაცემების შენახვა
//--------local storage - permanent data storage
localStorage.setItem("name", "Maia");
console.log("name is ", localStorage.getItem("name"));

let username = localStorage.getItem("name");
console.log("again ", username);

function saveThemePreference(theme) {
    localStorage.setItem("theme", theme)
}

function loadThemePreference () {
    const theme = localStorage.getItem("theme");
    if (theme) {
        console.log(`loaded theme: ${theme}`)
        document.body.className = theme;
    }else {
        console.log("N/A");
    }
}

saveThemePreference("light");
loadThemePreference();

// setItem, getItem, removeItem

// --------session storage - data storing for 1 tab only
sessionStorage.setItem("esaris", "raRAc");
console.log("esaris", sessionStorage.getItem("esaris"));

// -----stringify, pars
let userr = {
    saxeli: "maia",
    gvari: "surmava",
}

localStorage.setItem("user", JSON.stringify(userr));

let auser = JSON.parse(localStorage.getItem("userr"));

// console.log(auser.saxeli);

//-----task
// 1. Using localStorage to save personal information
localStorage.setItem("name", "John");
localStorage.setItem("lastName", "Doe");
localStorage.setItem("age", "28");
localStorage.setItem("gender", "Male");
localStorage.setItem("city", "New York");

console.log("");
console.log("Name:", localStorage.getItem("name"));
console.log("Last Name:", localStorage.getItem("lastName"));
console.log("Age:", localStorage.getItem("age"));
console.log("Gender:", localStorage.getItem("gender"));
console.log("City:", localStorage.getItem("city"));

// 2. Using sessionStorage to save book information
sessionStorage.setItem("bookName", "To Kill a Mockingbird");
sessionStorage.setItem("year", "1960");
sessionStorage.setItem("author", "Harper Lee");

console.log("");
console.log("Book Name:", sessionStorage.getItem("bookName"));
console.log("Year:", sessionStorage.getItem("year"));
console.log("Author:", sessionStorage.getItem("author"));

// 3. Create an object for bio and save it in localStorage
const bio = {
    name: "John",
    lastName: "Doe",
    age: 28,
    gender: "Male",
    city: "New York",
};
localStorage.setItem("bio", JSON.stringify(bio));


console.log("");
const savedBio = JSON.parse(localStorage.getItem("bio")); 
console.log(savedBio);
