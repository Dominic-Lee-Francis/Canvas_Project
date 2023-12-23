/**
 * This is the index.js file for the canvas.
 * It contains the code for initializing the canvas, setting up event listeners, and handling drawing functions.
 */
// 
const canvas = document.querySelector('canvas'),
toolBtns = document.querySelectorAll('.tool'),
fillColor = document.querySelector('#fillColor'),
sizeSlider = document.querySelector('#sizeSlider'),
colorPicker = document.querySelector('#colorPicker'),
colorPickerBackground = document.querySelector('#colorPickerBackground'),
undoCanvasBtn = document.querySelector('#undoCanvasBtn'),
clearCanvasBtn = document.querySelector('#clearCanvasBtn'),
saveCanvasBtn = document.querySelector('#saveCanvasBtn'),
ctx = canvas.getContext('2d');


// global variables and their default values
let prevMouseX, prevMouseY, snapshot,
isDrawing = false,
selectedTool = 'brush',
brushWidth = 5,
selectedColor = 'black',
fillInBackground = '#ffffff',
fillInColor = 'black';

let restoreArray = [];
let index = -1;


// sets canvas background to white
const setCanvasBackground = () => {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fillInBackground;
}

// loads canvas when page loads
window.addEventListener('load', () => {
    // sets width and height of the canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const startDrawing = (event) => {
    isDrawing = true;
    prevMouseX =event.offsetX; //sets current mouse position as prevMouseX value
    prevMouseY =event.offsetY; //sets current mouse position as prevMouseY value
    ctx.beginPath(); //creates new path to draw from
    ctx.lineWidth = brushWidth; //uses brush width to change line width
    ctx.strokeStyle = selectedColor; //uses selectedColor to change line color
    ctx.fillStyle = selectedColor; //uses selectedColor to change fill color
    // copies canvas data and then stores it in snapshot variable aka avoids dragging the shapes around
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height); 
}

const drawing = (event) => {
    if(!isDrawing) return; // if isDrawing is false, stop the function here, so only activates this function while isDrawing is true
    ctx.putImageData(snapshot, 0, 0); //add the snapshot copied canvas on to this canvas

    if(selectedTool === "brush" || selectedTool === "eraser") {
        // if selected tool is eraser then set strokeStyle to white.
        // if selected tool is brush then set strokeStyle to selectedColor
        ctx.strokeStyle = selectedTool === "eraser" ? '#fff' : selectedColor; 
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
    } else if(selectedTool === "curvedLine") {
        drawCurvedLine(event);
    }
    
}





// adds event listeners to the canvas for mouse down, mouse move, mouse up and mouse leave
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => isDrawing = false && restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height)), index++);
canvas.addEventListener('mouseleave', () => isDrawing = false && restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height)), index++);