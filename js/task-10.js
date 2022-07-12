function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  inputNumber: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divCreateBoxes: document.querySelector('#boxes')
};

function createBoxes(number) {

    const divBoxes = [];
 
    let stepSize = 20;

    for (let i = Number(refs.inputNumber.min); i <= number; i += 1 ){
        const divElement = document.createElement('div');
        stepSize += 10;
        divElement.style.width = stepSize + 'px';
        divElement.style.height = stepSize +'px';
        divElement.style.backgroundColor = getRandomHexColor();
        divBoxes.push(divElement);
        console.log(divElement);
    }
  refs.divCreateBoxes.append(...divBoxes);
};

function destroyBoxes() {
  refs.divCreateBoxes.innerHTML = '';
};


refs.btnCreate.addEventListener('click', event => {
  createBoxes(refs.inputNumber.value);
});

refs.btnDestroy.addEventListener('click', event => {
  destroyBoxes();
});
