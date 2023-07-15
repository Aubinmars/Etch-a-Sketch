const colorPicker = document.getElementById('color-picker');
const colorModeBtn = document.getElementById('color-mode');
const rainbowModeBtn = document.getElementById('rainbow-mode');
const eraserModeBtn = document.getElementById('eraser-mode');
const clearBtn = document.getElementById('clear');
const grid = document.querySelector('.grid');

let currentColor = colorPicker.value;
let currentMode = 'color';

function setColor(e) {
  currentColor = e.target.value;
}

function setMode(mode) {
  currentMode = mode;
  if (mode === 'color') {
    colorModeBtn.classList.add('active');
    rainbowModeBtn.classList.remove('active');
    eraserModeBtn.classList.remove('active');
  } else if (mode === 'rainbow') {
    colorModeBtn.classList.remove('active');
    rainbowModeBtn.classList.add('active');
    eraserModeBtn.classList.remove('active');
  } else if (mode === 'eraser') {
    colorModeBtn.classList.remove('active');
    rainbowModeBtn.classList.remove('active');
    eraserModeBtn.classList.add('active');
  }
}

function clearGrid() {
  grid.innerHTML = '';
  createGrid();
}

function createGrid() {
  const size = 16;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseover', draw);
    grid.appendChild(cell);
  }
}

function draw(e) {
  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'rainbow') {
    const randomColor = getRandomColor();
    e.target.style.backgroundColor = randomColor;
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '';
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

colorPicker.addEventListener('input', setColor);
colorModeBtn.addEventListener('click', () => setMode('color'));
rainbowModeBtn.addEventListener('click', () => setMode('rainbow'));
eraserModeBtn.addEventListener('click', () => setMode('eraser'));
clearBtn.addEventListener('click', clearGrid);

createGrid();
setMode('color');
