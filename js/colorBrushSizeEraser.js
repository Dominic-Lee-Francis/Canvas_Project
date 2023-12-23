sizeSlider.addEventListener('change', () => brushWidth = sizeSlider.value); //size of brush is changed by slider

selectedColor = colorPicker.addEventListener('change', () => ctx.strokeStyle = colorPicker.value); //color of brush is changed by color picker
fillInColor = colorPicker.addEventListener('change', () => ctx.fillStyle = colorPicker.value);

clearCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears canvas
    setCanvasBackground();
});   