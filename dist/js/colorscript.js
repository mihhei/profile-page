const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

color1.addEventListener('click', changeColor1);
color2.addEventListener('click', changeColor2);
color3.addEventListener('click', changeColor3);

function changeColor1() {
  document.getElementById('css-style').href = 'css/main.css';
  localStorage.setItem('color', 'css/main.css');
}
function changeColor2() {
  document.getElementById('css-style').href = 'css/main2.css';
  localStorage.setItem('color', 'css/main2.css');
}
function changeColor3() {
  document.getElementById('css-style').href = 'css/main3.css';
  localStorage.setItem('color', 'css/main3.css');
}
