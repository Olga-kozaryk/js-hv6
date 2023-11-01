const InputValid = document.querySelector("#validation-input");
const InputLength = Number(InputValid.getAttribute('data-length'));
InputValid.addEventListener('blur', onValid);

function onValid(evt) {
    InputValid.classList.remove('valid', 'invalid');
    InputValid.value.length === InputLength ? 
    InputValid.classList.add('valid') : 
    InputValid.classList.add('invalid') 
}

