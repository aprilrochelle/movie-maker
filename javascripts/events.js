const data = require('./data');
const printSelectionsToDom = require('./printSelections');

let allElements = [];
const selections = [];
let budgetBox = '';

const getBudget = (e) => {
  budgetBox = e.target.parentNode.children[0].children[0].value;
  budgetBox = budgetBox * 1;
  checkEvents();
  // checkBudget(budgetBox);
};

const showSelections = (e) => {
  allElements = data.getElements();
  const selectedElement = e.target;
  allElements.forEach((element) => {
    if (element.id === selectedElement.id && selections.indexOf(element) === -1) {
      selections.push(element);
    };
  });
  printSelectionsToDom.printSelections(selections);
  printSelectionsToDom.getTotal(selections);
};

const checkEvents = () => {
  const checkboxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].removeAttribute('disabled');
    checkboxes[i].addEventListener('click', showSelections);
  };
};

const budgetEvents = () => {
  const budgetBtn = document.getElementById('set-budget');
  budgetBtn.addEventListener('click', getBudget);
};

module.exports = {
  checkEvents,
  budgetEvents,
};
