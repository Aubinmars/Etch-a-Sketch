const colorPicker = document.getElementById("colorPicker");
const colorModeBtn = document.getElementById("colorModeBtn");
const gradientModeBtn = document.getElementById("gradientModeBtn");
const resetBtn = document.getElementById("resetBtn");
const gridSizeInput = document.getElementById("gridSizeInput");
const resizeBtn = document.getElementById("resizeBtn");
const grid = document.getElementById("grid");

let currentColor = "#000000";
let currentMode = "color";
let gridSize = 16;

function createGrid(size) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", handleCellMouseOver);
    grid.appendChild(cell);
  }
}

function handleColorPickerChange(event) {
  currentColor = event.target.value;
}

function handleColorModeButtonClick() {
  currentMode = "color";
}

function handleGradientModeButtonClick() {
  currentMode = "gradient";
}

function handleResetButtonClick() {
  Array.from(grid.children).forEach((cell) => {
    cell.style.backgroundColor = "#fff";
  });
}

function handleResizeButtonClick() {
  const newSize = parseInt(gridSizeInput.value);
  if (newSize > 0 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  }
}

function handleCellMouseOver(event) {
  if (currentMode === "color") {
    event.target.style.backgroundColor = currentColor;
  } else if (currentMode === "gradient") {
    const backgroundColor = event.target.style.backgroundColor;
    const opacity = backgroundColor ? parseFloat(backgroundColor.slice(-4, -1)) : 0;
    if (opacity < 1) {
      event.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
    }
  }
}

colorPicker.addEventListener("input", handleColorPickerChange);
colorModeBtn.addEventListener("click", handleColorModeButtonClick);
gradientModeBtn.addEventListener("click", handleGradientModeButtonClick);
resetBtn.addEventListener("click", handleResetButtonClick);
resizeBtn.addEventListener("click", handleResizeButtonClick);

createGrid(gridSize);
