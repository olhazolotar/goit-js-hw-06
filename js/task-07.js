const refs = {
  text: document.querySelector('#text'),
  input: document.querySelector('#font-size-control'),
};

refs.input.addEventListener('input', onChangeSize);

function onChangeSize(event) {
  let num = event.currentTarget.value;
  refs.text.style.fontSize = num + 'px';
}
