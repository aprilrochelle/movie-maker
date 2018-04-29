// const data = require('./data');

const compareToBudget = (selections) => {
  let budgetTotal = document.getElementById('budget-amt').value;
  budgetTotal = budgetTotal * 1;
  let totalElementsCost = 0;
  selections.forEach((selection) => {
    totalElementsCost += selection.cost;
  });
  const costDifference = budgetTotal - totalElementsCost;
  return costDifference;
};

// const printBudgetComparison = (amount) => {
//   const selectionTotalDiv = document.getElementById('selection-total-div');
//   selectionTotalDiv.innerHTML = budgetComparisonString(amount);
// };

// const budgetComparisonString = (amount) => {
//   let budgetDifference = '';
//   if (amount >= 0) {
//     budgetDifference += `<h3 class="budget-difference green">$${amount}</h3>`;
//   } else {
//     budgetDifference += `<h3 class="budget-difference red">$${amount}</h3>`;
//   };
//   budgetDifference += `<h4>Remaining</h4>`;
//   return budgetDifference;
// };

module.exports = {
  compareToBudget,
};
