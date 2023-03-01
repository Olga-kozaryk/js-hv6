const inputFontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputFontSize.addEventListener('input', (event) => {
 let changeSize = event.target.value;
 textSize.style.fontSize = `${changeSize}px`;
});