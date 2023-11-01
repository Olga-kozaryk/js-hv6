const inputEl = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
inputEl.addEventListener('input',onNameOutput);
function onNameOutput(evt){
inputEl.value ?
userName.textContent = inputEl.value:
userName.textContent = 'Anonymous' ;
}
