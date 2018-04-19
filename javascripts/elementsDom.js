const elementDiv = document.getElementById('elements-display');
const data = require('./data');

let categories = [];
let elements = [];

const domString = (categoryList, elementList) => {
  let domString = '';
  categoryList.forEach((category) => {
    domString += `<div class="col-xs-8">`;
    domString += `<h2 class="text-center">${category.categoryName}</h2>`;
    domString += `<div class="row">`;
    elementList.forEach((element) => {
      if (category.id === element.categoryId) {
        domString += `<div class="col-xs-2 col-xs-offset-1">`;
        domString +=  `<div class="checkbox">`;
        domString +=    `<label>`;
        domString +=      `<input id="${element.id}" class="checkbox" type="checkbox" value="">${element.name}`;
        domString +=    `</label>`;
        domString +=  `</div>`;
        domString += `</div>`;
      };
    });
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printElementsToDom = () => {
  categories = data.getCategories();
  elements = data.getElements();
  elementDiv.innerHTML = domString(categories, elements);
};

module.exports = printElementsToDom;
