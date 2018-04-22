const printSelections = (selections) => {
  const selectionsDiv = document.getElementById('selections-div');
  selectionsDiv.innerHTML = selectionDomString(selections);
};

const printTotal = (cost) => {
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

const getTotal = (selections) => {
  let elementCost = 0;
  selections.forEach((selection) => {
    elementCost += selection.cost;
  });
  printTotal(elementCost);
};

module.exports = {
  printSelections,
  getTotal,
};
