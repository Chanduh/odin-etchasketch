const defaultSize = 16;
let currentSize = defaultSize;
let size = 16;


function setCurrentSize(newSize) {
    currentSize = newSize;
  }




const grid = document.getElementById('grid')
const black = document.getElementById('black')
const red = document.getElementById('red')
const orange = document.getElementById('orange')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const purple = document.getElementById('purple')
const pink = document.getElementById('pink')
const clear = document.getElementById('clear')
const setSize = document.getElementById('setSize')


black.onclick = () => setCurrentMode('color')





let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement)
      }
}

function changeColor() {
    let currentColor = black;
    e.target.style.backgroundColor = currentColor; 
  }


  

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
  }