const drawTriangle = (event) => {
    ctx.beginPath(); //creates new path to draw triangle
    ctx.moveTo(prevMouseX, prevMouseY); //moves triangle from mouse position
    ctx.lineTo(event.offsetX, event.offsetY); // creates line 1 from mouse position
    ctx.lineTo(prevMouseX * 2 - event.offsetX, event.offsetY); // creates line 2 of triangle
    ctx.closePath(); //creates line 3 of triangle
    ctx.stroke();
    fillColor.checked ? ctx.fill() : ctx.stroke(); //if fill color is checked, fill the triangle, if not then draw a triangle border
}