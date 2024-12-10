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
fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'Post',
    headers: {
        'content-tupe' : 'applocation/json',
    },
    body: JSON.stringify({
        title: 'New post',
        
    })
}) 