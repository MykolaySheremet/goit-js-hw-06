function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divCreateBoxes = document.querySelector('#boxes');



// console.log(btnCreate);
// console.log(btnDestroy);
// console.log(divCreateBoxes);
// // console.log(inputNumber.min);



function createBoxes(number) {

    const divBoxes = [];
 
    let stepSize = 20;

    for (let i = Number(inputNumber.min); i <= number; i += 1 ){
    const divElement = document.createElement('div');
    stepSize += 10;
    divElement.style.width = stepSize + 'px';
    divElement.style.height = stepSize +'px';
    divElement.style.backgroundColor = getRandomHexColor();
    divBoxes.push(divElement);
    console.log(divElement);
    }
  divCreateBoxes.append(...divBoxes);
};

function destroyBoxes() {
  divCreateBoxes.innerHTML = '';
};


btnCreate.addEventListener('click', event => {
  console.log(inputNumber.value);
  createBoxes(inputNumber.value);
});

btnDestroy.addEventListener('click', event => {
destroyBoxes();
})


// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input 
//  и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>


// <div id="boxes"></div>
// Создай функцию createBoxes(amount),
//   которая принимает один параметр - число.
//   Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.




// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.
