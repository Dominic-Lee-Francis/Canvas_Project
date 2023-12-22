const canvas = document.querySelector('canvas'),
toolBtns = document.querySelectorAll('.tool'),
fillColor = document.querySelector('#fillColor'),
ctx = canvas.getContext('2d');

// global variables and their default values
let prevMouseX, prevMouseY, snapshot,
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
    // copies canvas data and then stores it in snapshot variable aka avoids dragging the shapes around
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height); 
}

const drawing = (event) => {
    if(!isDrawing) return; // if isDrawing is false, stop the function here, so only activates this function while isDrawing is true
    ctx.putImageData(snapshot, 0, 0); //add the snapshot copied canvas on to this canvas

    if(selectedTool === "brush") {
        ctx.lineTo(event.offsetX, event.offsetY); //creates a line using mouse
        ctx.stroke(); //adds color to the line
        // this is just for a line
    } else if(selectedTool === "rectangle") {
        drawRectangle(event);
        // draws rectangle, see code in rectangle.js
    } else if(selectedTool === "circle") {
        drawCircle(event);
    } else if(selectedTool === "triangle") {
        drawTriangle(event);
    } else if(selectedTool === "straightLine") {
        drawStraightLine(event);
    }
    
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => isDrawing = false);