const printSelections = (selections) => {
  const selectionsDiv = document.getElementById('selections-div');
  selectionsDiv.innerHTML = selectionDomString(selections);
};

const selectionDomString = (selections) => {
  let selectionString = '';
  selections.forEach((selection) => {
    selectionString += `<h5>Name: ${selection.name}</h5>`;
    selectionString += `<h5>Cost: ${selection.cost}</h5>`;
  });
  return selectionString;
};

module.exports = printSelections;
