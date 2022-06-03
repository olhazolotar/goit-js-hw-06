const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const elements = {
    email,
    password,
  };

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены');
  }

  console.log(elements);
  event.currentTarget.reset();
}
