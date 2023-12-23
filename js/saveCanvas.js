/*
    Contains code for saving the canvas as an image when the saveCanvasBtn is clicked.
*/

saveCanvasBtn.addEventListener('click', () => {
    let image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    let link = document.createElement('a');
    link.download = "my-Image.png";
    link.href = image;
    link.click();
});