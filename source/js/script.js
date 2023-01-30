let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');
let navToggleNoJs = document.querySelector('.main-header__toggle--nojs');

navToggle.classList.remove("main-header__toggle--nojs");
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navToggle.classList.toggle("active");
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
