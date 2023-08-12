console.log('Hello JavaScript World');

const sectionItems = document.getElementsByTagName('section');


for (const sectionItem of sectionItems) {
    // console.log(sectionItem);
    sectionItem.style.backgroundColor = 'lightgrey';
    sectionItem.style.border = '5px solid red';
    sectionItem.style.marginBottom = '10px';
    sectionItem.style.padding = '20px'
}

const domTitle = document.getElementById('dom-title');
domTitle.style.color = 'Red';

// const carContainer = document.getElementById('car-container');
// console.log(carContainer);
// carContainer.classList.add('text-center')
// carContainer.classList.remove('important-fruit');