const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const menuEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = `${ingredient}`;
  return listEl;
});

menuEl.append(...elements);
