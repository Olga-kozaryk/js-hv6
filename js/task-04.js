const refs = {
    counterValue: document.querySelector('#value'),
    reduceClickButton: document.querySelector('[data-action="decrement"]'),
    addClickButton: document.querySelector('[data-action="increment"]'),
};
refs.reduceClickButton.addEventListener('click', (event) => {
  refs.counterValue.textContent -= 1;
  });
refs.addClickButton.addEventListener('click', (event) => {
let total = parseInt(refs.counterValue.textContent);
refs.counterValue.textContent = total + 1;
});