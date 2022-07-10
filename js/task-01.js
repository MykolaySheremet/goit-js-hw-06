const categories = document.querySelectorAll('.item');

console.log(`Number of categories ${categories.length}`);
console.log(``);

const listOfCategories = document.querySelectorAll('#categories .item')


listOfCategories.forEach(element => {
    
    const listOfSubCategories = element.querySelectorAll('li');
  
    const nameOfCategories = element.querySelector('h2');

    console.log(`Category: ${nameOfCategories.textContent}`);
    console.log(`Elements: ${listOfSubCategories.length}`);
    console.log(``);

});


