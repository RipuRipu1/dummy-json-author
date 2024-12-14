const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
];

const roots = document.querySelectorAll('.root');

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
    .then(dataArray => {
        dataArray.forEach((data, index) => {
            const authorElement = roots[index];
            
            authorElement.textContent = data.name;
        });
    })
    .catch(error => {
        console.error("Failed to fetch data: ", error);
    });
