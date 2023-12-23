const drawCurvedLine = (event) => {
    ctx.beginPath(); //creates new path to draw straight line

    let controlPointX = 50;
    let controlPointY = 50;

    ctx.moveTo(prevMouseX, prevMouseY); //moves from mouse position
    ctx.quadraticCurveTo(controlPointX, controlPointY, event.offsetX, event.offsetY);
    // ctx.bezierCurveTo(prevMouseX, prevMouseY, controlPointX, controlPointY, event.offsetX, event.offsetY);
    ctx.stroke();
}