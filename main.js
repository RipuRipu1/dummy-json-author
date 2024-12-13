const root = document.getElementById('root');
const index = 1
const url = `https://jsonplaceholder.typicode.com/users/${index}`
const p = document.createElement('p');

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error("failed to connect");
    }
    return response.json();
})
.then(data => {
    console.log("data: ", data);
    const name = data['name'];
    console.log("name: ", name);
    const str = JSON.stringify(name);
    const text = document.createTextNode(str);
    p.appendChild(text);
    root.appendChild(p);
})
.catch(function(error){
    console.log(error);
});