const colorChangerButton = document.querySelector('.color-changer');
const bodyBackground = document.querySelector('body');

function changeColor() {
  const colors = Math.floor(Math.random() * 16777215).toString(16);

  bodyBackground.style.backgroundColor = '#' + colors;
}

colorChangerButton.addEventListener('click', changeColor);
