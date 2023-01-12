let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

console.log(navMain);
console.log(navToggle);
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  console.log(navMain.classList.contains('main-nav--closed'));
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
