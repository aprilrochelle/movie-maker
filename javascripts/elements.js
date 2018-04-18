const callElements = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/movie-elements.json');
  myRequest.send();
};

module.exports = callElements;
