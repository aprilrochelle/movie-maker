const data = require('./data');
const printSelectionsToDom = require('./printSelections');

let allElements = [];
const selections = [];

const showSelections = (e) => {
  allElements = data.getElements();
  const selectedElement = e.target.id;
  allElements.forEach((element) => {
    if (element.id === selectedElement && selections.indexOf(element) === -1) {
      selections.push(element);
    };
  });
  printSelectionsToDom(selections);
};

const checkEvents = () => {
  const checkboxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', showSelections);
  };
};

module.exports = {
  checkEvents,
};
