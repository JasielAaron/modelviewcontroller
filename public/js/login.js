const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('-------bang-------')
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#username-signup');
  const email = document.querySelector('#email-signup');
  const password = document.querySelector('#password-signup');

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username: name.value, email: email.value, password: password.value }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);