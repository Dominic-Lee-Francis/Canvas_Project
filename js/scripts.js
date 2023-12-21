const canvas = document.querySelector('canvas'),
toolBtns = document.querySelectorAll('.tool'),
ctx = canvas.getContext('2d');

// global variables and their default values
let prevMouseX, prevMouseY,
isDrawing = false,
selectedTool = 'brush',
brushWidth = 5;

window.addEventListener('load', () => {
    // sets width and height of the canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDrawing = (event) => {
    isDrawing = true;
    prevMouseX =event.offsetX; //sets current mouse position as prevMouseX value
    prevMouseY =event.offsetY; //sets current mouse position as prevMouseY value
    ctx.beginPath(); //creates new path to draw from
    ctx.lineWidth = brushWidth; //uses brush width to change line width
}

const drawing = (event) => {
    if(!isDrawing) return; // if isDrawing is false, stop the function here, so only activates this function while isDrawing is true
    
    if(selectedTool === "brush") {
        ctx.lineTo(event.offsetX, event.offsetY); //creates a line using mouse
        ctx.stroke(); //adds color to the line
    } else if(selectedTool === "rectangle") {
        drawRectangle(event);
    }
    
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => isDrawing = false);