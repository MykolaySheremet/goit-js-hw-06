const inputPlace = document.querySelector('input[data-length = "6"]');


inputPlace.addEventListener('blur', event => {
    if (event.currentTarget.value.length === Number(inputPlace.dataset.length)) {
        inputPlace.classList.remove('invalid');
        inputPlace.classList.add("valid");
    }
    else {
        inputPlace.classList.remove('valid');
        inputPlace.classList.add("invalid");
    };
});
