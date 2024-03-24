const burger = document.querySelector('.burger');
const burgerMenu = burger.querySelector('.burger__menu');
const siteNavigation = document.querySelector('.site-navigation');

if (window.matchMedia('(max-width: 767px)').matches) {
  burger.addEventListener('click', (evt) => {
    evt.preventDefault();
    siteNavigation.classList.toggle('open');
    burgerMenu.classList.toggle('open');
  });
}
