const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const createLi = (count => {

  for (let i = 0; i < count; i += 1){
    const li = document.createElement('li');

    li.textContent = `${ingredients[i]}`;
    li.classList.add('item');
    listOfIngredients.append(li);
  }
})

createLi(ingredients.length);

