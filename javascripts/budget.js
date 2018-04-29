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

module.exports = {
  compareToBudget,
};
