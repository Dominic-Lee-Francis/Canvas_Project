const brushTool = (event) => {
    ctx.beginPath(); //creates new path to draw straight line
    ctx.strokeStyle = selectedTool; //moves from mouse position
    ctx.lineTo(event.offsetX, event.offsetY); // creates 1 line
    ctx.stroke();
}