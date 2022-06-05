const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  input.textContent = event.currentTarget.value;
  const num = Number(input.dataset.length);

  console.log(input.dataset.length);

  if (input.textContent.length === num) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
