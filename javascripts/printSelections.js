const data = require('./data');

const printSelections = (selections) => {
  const selectionsDiv = document.getElementById('selections-div');
  selectionsDiv.innerHTML = selectionDomString(selections);
  printTotal();
};

const printTotal = () => {
  const cost = data.getTotal();
  const selectionTotalDiv = document.getElementById('selection-total-div');
  selectionTotalDiv.innerHTML = selectionTotalString(cost);
};

const selectionDomString = (selections) => {
  let selectionString = '';
  selections.forEach((selection) => {
    selectionString += `<h5>${selection.name}: $${selection.cost}</h5>`;
  });
  return selectionString;
};

const selectionTotalString = (cost) => {
  let selectionTotal = '';
  selectionTotal = `<h3>Total Cost: $${cost}</h3>`;
  return selectionTotal;
};

module.exports = {
  printSelections,
};
