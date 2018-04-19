const data = require('./data');

let allElements = [];

const showSelections = (e) => {
  allElements = data.getElements();
  const selectedElement = e.target.id;
  allElements.forEach((element) => {
    if (element.id === selectedElement) {
      console.log(element);
    };
  });
};

const checkEvents = () => {
  const checkboxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', showSelections);
  };
};

module.exports = {
  checkEvents,
};
