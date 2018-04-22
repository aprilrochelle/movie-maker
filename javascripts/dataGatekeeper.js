const callCategories = require('./categories');
const callElements = require('./elements');
const data = require('./data');
const elementsDom = require('./elementsDom');
const events = require('./events');

const whenCategoriesLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCategories(categoryData);
  callElements(whenElementsLoad, ifLoadFails);
};

const whenElementsLoad = function () {
  const elementData = JSON.parse(this.responseText).movieElements;
  data.setElements(elementData);
  elementsDom();
};

const ifLoadFails = function () {
  console.log('Something went wrong.');
};

const initializer = () => {
  callCategories(whenCategoriesLoad, ifLoadFails);
  events.budgetEvents();
};

module.exports = {
  initializer,
};
