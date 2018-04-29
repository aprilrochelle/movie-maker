const budget = require('./budget');
const approvalDiv = document.getElementById('approval-div');

const printSelections = (selections) => {
  const selectionsDiv = document.getElementById('selections-div');
  selectionsDiv.innerHTML = selectionDomString(selections);
  const amountLeft = budget.compareToBudget(selections);
  const uniqueCategories = [...new Set(selections.map(item => item.categoryId)),];
  if (uniqueCategories.length === 1) {
    printAlertMessage();
  } else if (uniqueCategories.length === 2) {
    printAlertMessage();
  } else if (uniqueCategories.length === 3) {
    printAlertMessage();
  } else if (uniqueCategories.length === 4 && amountLeft >= 0) {
    printApprovalMessage();
  } else {
    printAlertMessage();
  };
  printBudgetComparison(amountLeft);
};

const printApprovalMessage = () => {
  approvalDiv.innerHTML = `<h4 class="green">You're ready to make the movie!</h4>`;
};

const printAlertMessage = () => {
  approvalDiv.innerHTML = `<h4 class="red">You're not ready to make this movie yet!</h4>`;
};

const selectionDomString = (selections) => {
  let selectionString = '';
  selections.forEach((selection) => {
    selectionString += `<h5>${selection.name}: $${selection.cost}</h5>`;
  });
  return selectionString;
};

const printBudgetComparison = (amount) => {
  const selectionTotalDiv = document.getElementById('selection-total-div');
  selectionTotalDiv.innerHTML = budgetComparisonString(amount);
};

const budgetComparisonString = (amount) => {
  let budgetDifference = '';
  if (amount >= 0) {
    budgetDifference += `<h3 class="budget-difference green">$${amount}</h3>`;
  } else {
    budgetDifference += `<h3 class="budget-difference red">$${amount}</h3>`;
  };
  budgetDifference += `<h4 class="budget-remaining">Remaining</h4>`;
  return budgetDifference;
};

module.exports = {
  printSelections,
};
