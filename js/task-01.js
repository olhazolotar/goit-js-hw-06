const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
  const titleEl = category.querySelector('h2');
  console.log('Category: ', titleEl.textContent);

  const itemsEl = category.querySelectorAll('li');
  console.log('Elements: ', itemsEl.length);
});
