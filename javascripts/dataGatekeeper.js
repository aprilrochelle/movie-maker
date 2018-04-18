const callCategories = require('./categories');
const callElements = require('./elements');

const whenCategoriesLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  console.log(categoryData);
};

const whenElementsLoad = function () {
  const elementData = JSON.parse(this.responseText).movieElements;
  console.log(elementData);
};

const ifLoadFails = function () {
  console.log('Something went wrong.');
};

const initializer = () => {
  callCategories(whenCategoriesLoad, ifLoadFails);
  callElements(whenElementsLoad, ifLoadFails);
};

module.exports = {
  initializer,
};
