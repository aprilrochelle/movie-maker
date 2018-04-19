const elementDiv = document.getElementById('elements-display');
const data = require('./data');

let categories = [];
let elements = [];

const domString = (categoryList, elementList) => {
  let domString = '';
  categoryList.forEach((category) => {
    domString += `<h2>${category.categoryName}</h2>`;
    elementList.forEach((element) => {
      if (category.id === element.categoryId) {
        domString += `<h5>${element.name}</h5>`;
      }
    });
  });
  return domString;
};

const printElementsToDom = () => {
  categories = data.getCategories();
  elements = data.getElements();
  elementDiv.innerHTML = domString(categories, elements);
};

module.exports = printElementsToDom;
