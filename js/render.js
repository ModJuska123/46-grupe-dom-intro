const h1DOM = document.querySelector('h1');

h1DOM.innerText = 'Movies...';


const movies = [

];

const ulDOM = document .getElementsByTagName('ul');

let moviesHTML = '';

for (let i = 0; i < movies.length; i++) {
    const moviesTitle = movies[i];
    moviesHTML += <li>${moviesTitle}</li>

    
}

ulDOM.innerHTML = moviesHTML;