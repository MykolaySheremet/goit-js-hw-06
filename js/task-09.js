// Варіант 1.

const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color')
};


refs.button.addEventListener('click', changeBodyColor);

function changeBodyColor(event) {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.background = getRandomHexColor();
};



// Варіант 2.

// const bodyElement = document.querySelector('body');
// const btnChangeColor = document.querySelector('.change-color');
// const colorValue = document.querySelector('.color');


// btnChangeColor.addEventListener('click', event => {
//   bodyElement.style.background = getRandomHexColor();
//   colorValue.textContent = getRandomHexColor();
// });


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


