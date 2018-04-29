const progressBar = (selections) => {
  const progress = document.getElementById('progress-bar');
  const categoriesSelected = [...new Set(selections.map(item => item.categoryId)),];
  if (categoriesSelected.length === 1) {
    progress.classList.add('percent25');
  } else if (categoriesSelected.length === 2) {
    progress.classList.remove('percent25');
    progress.classList.add('percent50');
  } else if (categoriesSelected.length === 3) {
    progress.classList.remove('percent25', 'percent50');
    progress.classList.add('percent75');
  } else if (categoriesSelected.length >= 4) {
    progress.classList.remove('percent25', 'percent50', 'percent75');
    progress.classList.add('percent100');
  }
};

module.exports = progressBar;
