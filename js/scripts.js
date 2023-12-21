const canvas = document.querySelector('canvas'),
toolBtns = document.querySelectorAll('.tool'),
ctx = canvas.getContext('2d');

let isDrawing = false,
brushWidth = 5;

window.addEventListener('load', () => {
    // sets width and height of the canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDrawing = () => {
    isDrawing = true;
    ctx.beginPath(); //creates new path to draw from
    ctx.lineWidth = brushWidth; //uses brush width to change line width
}

const drawing = (event) => {
    if(!isDrawing) return; // if isDrawing is false, stop the function here, so only activates this function while isDrawing is true
    ctx.lineTo(event.offsetX, event.offsetY); //creates a line using mouse
    ctx.stroke(); //adds color to the line
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => isDrawing = false);