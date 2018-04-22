let categories = [];
let elements = [];
let elementCost = 0;

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getCategories = () => {
  return categories;
};

const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getElements = () => {
  return elements;
};

const setTotal = (selections) => {
  selections.forEach((selection) => {
    elementCost += selection.cost;
  });
};

const getTotal = () => {
  return elementCost;
};

module.exports = {
  setCategories,
  setElements,
  getCategories,
  getElements,
  setTotal,
  getTotal,
};
