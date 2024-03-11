const menuBtnRef = document.querySelector('.menu-btn');
const mobileMenuRef = document.querySelector('.mobile-menu');
const menuLink = document.querySelector('.menu-link');

menuBtnRef.addEventListener('click', () => {
  mobileMenuRef.classList.toggle('open');
  menuBtnRef.classList.toggle('active');
});

menuLink.addEventListener('click', () => {
  mobileMenuRef.classList.toggle('open');
  menuBtnRef.classList.toggle('active');
});
