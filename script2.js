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
