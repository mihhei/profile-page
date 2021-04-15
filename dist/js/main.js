const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const portrait = document.querySelector('.portrait');
const tap = document.querySelector('.tap-here');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (tap) {
    tap.classList.add('hidden');
  }
  if (!showMenu) {
    menuNav.classList.remove('hide');
    menuBranding.classList.remove('hide');

    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    portrait.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    portrait.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    menuNav.classList.add('hide');
    menuBranding.classList.add('hide');

    showMenu = false;
  }
}
