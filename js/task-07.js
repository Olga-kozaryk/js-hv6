const InputFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
InputFontSize.addEventListener('input', onTextFontSize);
function onTextFontSize(evt) {
    text.style.fontSize = `${InputFontSize.value}px`
};
