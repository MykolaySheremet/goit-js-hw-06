const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => {
    event.preventDefault();

    if (!event.currentTarget.elements.email.value|| 
        !event.currentTarget.elements.password.value) {
  
        return alert('для входу - ВСІ ПОЛЯ повинні бути заповненні !!!');
    }

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
     
    const valuesDataForm = {
        email,
        password
    };
    console.log(valuesDataForm);
    formElement.reset();
});
