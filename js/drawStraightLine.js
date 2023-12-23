/**
 * Draws a straight line on the canvas from the previous mouse position to the current mouse position.
 */
const drawStraightLine = (event) => {
    ctx.beginPath(); //creates new path to draw straight line
    ctx.moveTo(prevMouseX, prevMouseY); //moves from mouse position
    ctx.lineTo(event.offsetX, event.offsetY); // creates 1 line
    ctx.stroke();
}