const callCategories = require('./categories');

const whenCategoriesLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  console.log(categoryData);
};

const ifLoadFails = function () {
  console.log('Something went wrong.');
};

const initializer = () => {
  callCategories.callCategories(whenCategoriesLoad, ifLoadFails);
};

module.exports = {
  initializer,
};
