const sliderItems = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
let current = 0;

function reset() {
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('slide-invisible');
    sliderItems[i].classList.remove('slide-show');
    sliderItems[i].classList.add('slide-hide');
  }
}
function startSlide() {
  reset();
  sliderItems[0].classList.remove('slide-hide');
  sliderItems[0].classList.add('slide-show');
}

function slideLeft() {
  let currentNew;
  if (current === sliderItems.length) {
    currentNew = 0;
  } else {
    currentNew = current;
  }
  sliderItems[currentNew].classList.add('slide-invisible');
  setTimeout(() => {
    reset();
    sliderItems[current - 1].classList.remove('slide-hide');
    sliderItems[current - 1].classList.add('slide-show');
    current--;
  }, 500);
}

arrowLeft.addEventListener('click', function () {
  if (current === 0) {
    current = sliderItems.length;
  }
  slideLeft();
});

function slideRight() {
  let currentNew;
  if (current === -1) {
    currentNew = sliderItems.length - 1;
  } else {
    currentNew = current;
  }
  console.log(currentNew);
  sliderItems[currentNew].classList.add('slide-invisible');
  setTimeout(() => {
    reset();
    sliderItems[current + 1].classList.remove('slide-hide');
    sliderItems[current + 1].classList.add('slide-show');
    current++;
  }, 500);
}

arrowRight.addEventListener('click', function () {
  if (current === sliderItems.length - 1) {
    current = -1;
  }
  slideRight();
});
startSlide();
