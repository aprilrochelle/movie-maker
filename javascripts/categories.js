const callCategories = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/categories.json');
  myRequest.send();
};

module.exports = callCategories;
