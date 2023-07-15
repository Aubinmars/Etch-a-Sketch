const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize-button');

function createGrid(size) {
    while (container.firstChild) {
        container.firstChild.remove();
    }

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function hoverEffect(event) {
    const square = event.target;
    square.style.backgroundColor = 'black';
}

function removeColor(event) {
    const square = event.target;
    square.style.backgroundColor = '';
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

resizeButton.addEventListener('click', resizeGrid);
container.addEventListener('mouseover', hoverEffect);
container.addEventListener('mouseout', removeColor);

createGrid(16);
