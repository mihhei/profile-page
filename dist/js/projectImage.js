const image = document.querySelectorAll('.item-img');

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener('mouseover', () => {
    toHiddenImage(i + 1);
  });
  image[i].addEventListener('mouseout', () => {
    toShowImage(i + 1);
  });
}

const toHiddenImage = (i) => {
  document.getElementById(`item-img${i}`).classList.add('hiddenImage');
  document.getElementById(`item-text${i}`).classList.add('showText');
};

const toShowImage = (i) => {
  document.getElementById(`item-img${i}`).classList.remove('hiddenImage');
  document.getElementById(`item-text${i}`).classList.remove('showText');
};
