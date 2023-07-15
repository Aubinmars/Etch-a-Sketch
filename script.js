const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize-button');
const colorPicker = document.getElementById('color-picker');
const clearButton = document.getElementById('clear-button');
let currentColor = 'black';

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function draw(event) {
    if (event.target.classList.contains('cell')) {
        event.target.style.backgroundColor = currentColor;
    }
}

function resizeGrid() {
    let size = prompt('Enter the number of squares per side (maximum 100):');
    size = parseInt(size);

    if (isNaN(size) || size <= 0 || size > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    createGrid(size);
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function updateColor() {
    currentColor = colorPicker.value;
}

resizeButton.addEventListener('click', resizeGrid);
container.addEventListener('mouseover', draw);
clearButton.addEventListener('click', clearGrid);
colorPicker.addEventListener('input', updateColor);

createGrid(16);
