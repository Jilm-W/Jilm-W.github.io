document.addEventListener('DOMContentLoaded', (event) => {
  const hamburger = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
  });
});