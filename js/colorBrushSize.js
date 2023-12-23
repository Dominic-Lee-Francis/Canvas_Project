sizeSlider.addEventListener('change', () => brushWidth = sizeSlider.value); //size of brush is changed by slider

selectedColor = colorPicker.addEventListener('change', () => ctx.strokeStyle = colorPicker.value); //color of brush is changed by color picker
fillInColor = colorPicker.addEventListener('change', () => ctx.fillStyle = colorPicker.value);
fillInBackgroundEraser = colorPickerBackground.addEventListener('change', () => ctx.fillStyle = colorPickerBackground.value);

fillInBackground = colorPickerBackground.addEventListener('change', () => {
    ctx.fillStyle = colorPickerBackground.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = colorPickerBackground.value;
}); //color of background is changed by color picker

clearCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears canvas
    setCanvasBackground();
    restoreArray = [];
    index1 = -1;
});

undoCanvasBtn.addEventListener('click', () => {
    if(index <= 0) {
        clearCanvasBtn.click();
    } else {
        index--;
        restoreArray.pop();
        ctx.putImageData(restoreArray[index], 0, 0);
    }
});