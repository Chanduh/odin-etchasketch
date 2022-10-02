let currentColor = '#000000';
let currentSize = 16;



const grid = document.getElementById('grid')
const black = document.getElementById('black')
const red = document.getElementById('red')
const orange = document.getElementById('orange')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const purple = document.getElementById('purple')
const pink = document.getElementById('pink')

const bigger = document.getElementById('bigger')
const smaller = document.getElementById('smaller')

const clear = document.getElementById('clear')


// add event listeners to the buttons + grid elements
black.onclick = () => currentColor = '#000000';
red.onclick = () => currentColor = '#ff2f00';
orange.onclick = () => currentColor = '#f98900';
yellow.onclick = () => currentColor = '#cece03';
green.onclick = () => currentColor = '#55d279';
blue.onclick = () => currentColor = '#55d2c6';
purple.onclick = () => currentColor = '#a97fe3';
pink.onclick = () => currentColor = '#ff04bc';

bigger.onclick = () => biggerGrid();
smaller.onclick = () => smallerGrid();


clear.onclick = () => clearGrid();



function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
      }
}

function biggerGrid() {
    grid.innerHTML = '';
    createGrid(currentSize+=5)
}

function smallerGrid() {
    grid.innerHTML = '';
    createGrid(currentSize-=5);
}

function changeColor(e) {
    // if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}


function clearGrid() {
    grid.innerHTML = '';
    createGrid(currentSize);
  }

window.onload = () => {
    createGrid(currentSize)
  }

