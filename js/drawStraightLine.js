const drawStraightLine = (event) => {
    ctx.beginPath(); //creates new path to draw straight line
    ctx.moveTo(prevMouseX, prevMouseY); //moves from mouse position
    ctx.lineTo(event.offsetX, event.offsetY); // creates 1 line
    ctx.stroke();
}