const data = require('./data');
const printSelectionsToDom = require('./printSelections');
const progressBar = require('./progressBar');

let allElements = [];
const selections = [];

const disableBudgetBox = (e) => {
  const budgetBox = e.target.parentNode.children[0].children[0];
  budgetBox.setAttribute('disabled', 'disabled');
  checkEvents();
};

const showSelections = (e) => {
  allElements = data.getElements();
  const selectedElement = e.target;
  selectedElement.setAttribute('disabled', 'disabled');
  allElements.forEach((element) => {
    if (element.id === selectedElement.id && selections.indexOf(element) === -1) {
      selections.push(element);
    };
  });
  data.setTotal(selections);
  printSelectionsToDom.printSelections(selections);
  progressBar(selections);
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
  budgetBtn.addEventListener('click', disableBudgetBox);
};

module.exports = {
  checkEvents,
  budgetEvents,
};
