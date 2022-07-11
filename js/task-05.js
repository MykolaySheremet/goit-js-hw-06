
const inputName = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

inputName.addEventListener('input', event => {

    if (event.currentTarget.value.length === 0) {
        return nameOutput.textContent = 'Anonymous'; 
    }
    else {
        return nameOutput.textContent = event.currentTarget.value;
    };

});
