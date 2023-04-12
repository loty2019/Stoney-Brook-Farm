const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const title = document.querySelector('.title');
const mainNavLinks = document.querySelectorAll('.main-nav a');

hamburger.addEventListener('click', () => {
  header.classList.toggle('show-nav');
  title.classList.toggle('move-title');
  mainNavLinks.forEach(link => link.classList.toggle('show-link'));
});