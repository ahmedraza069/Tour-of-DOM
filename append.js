// Where to add
const placesList = document.getElementById('place-list');
// Create Element
const li = document.createElement('li');
li.innerText = 'pahartoli';
// Add the element
placesList.appendChild(li);

// Where to add

const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Favorite Food List'
section.appendChild(h1);
const ul = document.createElement('ul');
section.appendChild(ul)
const liOne = document.createElement('li');
liOne.innerText = 'Biriani';
ul.appendChild(liOne);
const liTwo = document.createElement('li');
liTwo.innerText = 'Burhani';
ul.appendChild(liTwo);
const liThree = document.createElement('li');
liThree.innerText = 'salad';
ul.appendChild(liThree);
const liFour = document.createElement('li');
liFour.innerext = 'pani';
ul.appendChild(liFour);

mainContainer.appendChild(section);

// other format 
const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>Welcome to fruits Item</h1>
<ul id="place-list">
    <li>Apple - 1</li>
    <li>Apple - 2</li>
    <li>Apple - 3</li>
    <li>Apple - 4</li>
    <li>Apple - 5</li>
</ul>
`

mainContainer.appendChild(dressSection);