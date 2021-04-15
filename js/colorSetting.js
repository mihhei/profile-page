let color = localStorage.getItem('color');
if (color == null) {
  document.getElementById('css-style').href = 'css/main.css';
} else {
  document.getElementById('css-style').href = color;
}
