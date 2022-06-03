const refs = {
  valueEl: document.querySelector('#value'),
  decrementEl: document.querySelector('button[data-action="decrement"]'),
  incrementEl: document.querySelector('button[data-action="increment"]'),
};
const initialValue = 0;
let counterValue = initialValue;

refs.decrementEl.addEventListener('click', () => {
  const decrNum = (counterValue -= 1);
  refs.valueEl.textContent = decrNum;
});

refs.incrementEl.addEventListener('click', () => {
  const incrNum = (counterValue += 1);
  refs.valueEl.textContent = incrNum;
});
