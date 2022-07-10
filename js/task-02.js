const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

// ВАРИАНТ 1
// const createListOfLi = (count => {

//   const listOfLi = [];

//   for (let i = 0; i < count; i += 1) {
//     const li = document.createElement('li');
//     li.textContent = `${ingredients[i]}`;
//     li.classList.add('item');
    
//     listOfLi.push(li);
//   }
//   listOfIngredients.append(...listOfLi);
// });

// createListOfLi(ingredients.length);




// ВАРІАНТ 2
const listOfLi = ingredients.map(option => {
  const li = document.createElement('li');
  li.textContent = option;
  li.classList.add('item');
  return li;
});

listOfIngredients.append(...listOfLi);



