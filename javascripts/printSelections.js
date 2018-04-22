const budget = require('./budget');

const printSelections = (selections) => {
  const selectionsDiv = document.getElementById('selections-div');
  selectionsDiv.innerHTML = selectionDomString(selections);
  budget.compareToBudget(selections);
};

const selectionDomString = (selections) => {
  let selectionString = '';
  selections.forEach((selection) => {
    selectionString += `<h5>${selection.name}: $${selection.cost}</h5>`;
  });
  return selectionString;
};

module.exports = {
  printSelections,
};
