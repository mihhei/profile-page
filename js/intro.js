const frontPageTop = document.querySelector('.firstPage-top');
const frontPageBottom = document.querySelector('.firstPage-bottom');
const frontPage = document.querySelector('.firstPage');

window.addEventListener('load', () => {
  setTimeout(() => {
    toHiddenFront();
  }, 3000);
});

function toHiddenFront() {
  frontPageTop.classList.add('hidden');
  frontPageBottom.classList.add('hidden');
  frontPage.classList.add('hidden');

  setTimeout(() => {
    tapHere('TAP HERE >>>');
  }, 4000);
}

const tapHereDiv = document.querySelector('.tap-here');
let i = 0;
let letter = '';
function tapHere(string) {
  setTimeout(() => {
    if (string[i] === ' ') {
      letter += ' ';
      i++;
    }
    letter += string[i];
    tapHereDiv.innerHTML = letter;
    i++;
    if (i < string.length || i === string.length) {
      tapHere(string);
    }
    if (i > string.length) {
      i = 0;
      letter = '';
      tapHereDiv.innerHTML = '';
      tapHere(string);
    }
  }, 250);
}
