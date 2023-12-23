/**
 * This code defines a function called drawCircle that is responsible for drawing a circle on a canvas.
 * The radius of the circle is calculated based on the distance between the previous mouse position and the current mouse position.
 * The circle is then drawn using ctx.arc() function, with the center coordinates being the previous mouse position and the radius calculated earlier.
 * Finally, the circle is either filled or stroked based on the value of the fillColor checkbox.
 */
const drawCircle = (event) => {
    // creates new path to draw circle
    ctx.beginPath();
    // calculates radius and then places it in arc function. Without this the circle would not use mouse position to judge size.
    let radius = Math.sqrt(Math.pow((prevMouseX - event.offsetX), 2) + Math.pow((prevMouseY - event.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); //circle function
    fillColor.checked ? ctx.fill() : ctx.stroke(); //if fill color is checked, fill the circle, if not then draw a circle border
}