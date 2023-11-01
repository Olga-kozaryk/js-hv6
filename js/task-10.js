const numberInput = document.querySelector('.js-inputNumber');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const listBoxes= document.querySelector('#boxes');
listBoxes.classList.add('boxes');
btnCreate.addEventListener('click',onClickCreateBoxes);
btnDestroy.addEventListener('click', onClickDestroy);
// функція підбору кольору елемента
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
//ф-ція створення елементів 
function createBoxes(amount) {
  const divBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    divBoxes.push(div);
};
return divBoxes;
};

// ф-ція рендер елеменів по кліку
function onClickCreateBoxes(evt) {
  let elementsToAdd = createBoxes(numberInput.value);
  boxes.append(...elementsToAdd)}

//ф-ція очистки по кліку
function onClickDestroy(evt) {
  listBoxes.innerHTML = "";
numberInput.value = "";
}


