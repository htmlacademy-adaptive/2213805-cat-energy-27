let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navToggle.classList.remove("main-header__toggle--nojs");
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');

navToggle.addEventListener('click', function () {
  navToggle.classList.toggle("active");
  navMain.classList.remove('main-nav--nojs');
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
