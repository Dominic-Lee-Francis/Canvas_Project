const drawCircle = (event) => {
    // creates new path to draw circle
    ctx.beginPath();
    // calculates radius and then places it in arc function. Without this the circle would not use mouse position to judge size.
    let radius = Math.sqrt(Math.pow((prevMouseX - event.offsetX), 2) + Math.pow((prevMouseY - event.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); //circle function
    fillColor.checked ? ctx.fill() : ctx.stroke(); //if fill color is checked, fill the circle, if not then draw a circle border
}