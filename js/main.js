console.log('Labas rytas Lietuva!')
const titleDOM = document.getElementById('title');
console.log(titleDOM);

titleDOM.innerText = 'Hi';

console.log(titleDOM.classList);

for (let i = 0; i < titleDOM.classList.length; i++) {
    const c = titleDOM.classList[i];
    titleDOM.classList.remove(c);
    }

const sectionTitle = "About you my darling";
const sectionTitleDOM = document.querySelector('h2.section-title > span');
sectionTitleDOM.textContent = sectionTitle;