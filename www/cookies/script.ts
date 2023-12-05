const setCookieButton = document.querySelector('#set-cookie-button');
setCookieButton!.addEventListener('click', () => {
  console.log('Wait for me');
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24);
  document.cookie = `name=sample; expires=${expires}; path=/`;
  document.cookie = `location=japan; expires=${expires}; path=/`;
  console.log(document.cookie);
});

const deleteCookieButton = document.querySelector('#delete-cookie-button');
deleteCookieButton!.addEventListener('click', () => {
  console.log('Wait for me');
  const expires = new Date(0);
  document.cookie = `name=sample; expires=${expires}; path=/`;
  console.log(document.cookie);
});
