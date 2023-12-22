const drawTriangle = (event) => {
    ctx.beginPath(); //creates new path to draw triangle
    ctx.moveTo(prevMouseX, prevMouseY); //moves triangle from mouse position
    ctx.lineTo(event.offsetX, event.offsetY); // creates line 1
    ctx.stroke();
}