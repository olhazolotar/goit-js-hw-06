const refs = {
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
};

refs.buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
