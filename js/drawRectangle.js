const drawRectangle = (event) => {
    // if fill color is not checked, draw a rectangle border, if not then a full rectangle
    if (!fillColor.checked) {
        return ctx.strokeRect(event.offsetX, event.offsetY, prevMouseX - event.offsetX, prevMouseY - event.offsetY);
    }
    ctx.fillRect(event.offsetX, event.offsetY, prevMouseX - event.offsetX, prevMouseY - event.offsetY);
}