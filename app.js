const board = document.querySelector('#board');
const SQUARE_NUMBERS = 1020;
const COLORS = ['#d574eb', '#eb9074', '#ddeb6e', '#6e72eb', '#78eb6e', '#eb6e7d', '#e9eb6e'];

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square)

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });
}

function setColor (element) {
  const color = getRandomColor(COLORS);
  element.style.background = `${color}`;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor (element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor (colorsArray) {
  const colorIndex = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[colorIndex];
};

