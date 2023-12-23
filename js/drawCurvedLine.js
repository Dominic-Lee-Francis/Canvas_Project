const drawCurvedLine = (event) => {
    ctx.beginPath(); //creates new path to draw straight line

    let controlPointX = 10;
    let controlPointY = 10;

    ctx.moveTo(prevMouseX, prevMouseY); //moves from mouse position
    ctx.bezierCurveTo(prevMouseX, prevMouseY, controlPointX, controlPointY, event.offsetX, event.offsetY);
    ctx.stroke();
}