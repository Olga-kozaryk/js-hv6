const validationInput = document.querySelector('#validation-input');
const validValue = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', () => {
    validationInput.classList.remove('valid', 'invalid');

    validationInput.value.length === Number(validValue)
    ? validationInput.classList.add('valid')
    : validationInput.classList.add('invalid');
});