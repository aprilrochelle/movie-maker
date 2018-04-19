const data = require('./data');
const events = require('./events');

const elementDiv = document.getElementById('elements-display');

let categories = [];
let elements = [];

const domString = (categoryList, elementList) => {
  let domString = '';
  categoryList.forEach((category) => {
    domString += `<div class="container-fluid">`;
    domString += `<div class="col-xs-8">`;
    domString += `<h2 class="text-center">${category.categoryName}</h2>`;
    domString += `<div class="row">`;
    elementList.forEach((element) => {
      if (category.id === element.categoryId) {
        domString += `<div class="col-xs-3">`;
        domString +=  `<div class="checkbox">`;
        domString +=    `<label>`;
        domString +=      `<input id="${element.id}" class="check" type="checkbox" value="">${element.name}`;
        domString +=    `</label>`;
        domString +=  `</div>`;
        domString +=  `</div>`;
      };
    });
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printElementsToDom = () => {
  categories = data.getCategories();
  elements = data.getElements();
  elementDiv.innerHTML = domString(categories, elements);
  events.checkEvents();
};

module.exports = printElementsToDom;
