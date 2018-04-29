const data = require('./data');
const printSelectionsToDom = require('./printSelections');

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
  allElements.forEach((element) => {
    if (element.id === selectedElement.id && selections.indexOf(element) === -1) {
      selections.push(element);
    };
  });
  data.setTotal(selections);
  printSelectionsToDom.printSelections(selections);
};

const removeFromSelections = (e) => {
  const selectionToRemove = e.target.parentNode;
  console.log('Remove this one: ', selectionToRemove);
  // selections.splice(indexOf(selectionToRemove), 1);
};

const checkEvents = () => {
  const checkboxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].removeAttribute('disabled');
    checkboxes[i].addEventListener('change', function () {
      if (this.checked) {
        showSelections(event);
      } else {
        removeFromSelections(event);
      };
    });
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
