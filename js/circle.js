const drawCircle = (event) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - event.offsetX), 2) + Math.pow((prevMouseY - event.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}