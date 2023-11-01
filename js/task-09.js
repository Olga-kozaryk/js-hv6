const valueColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', onClick );

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  function onClick(evt) {
    valueColor.textContent = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
  };