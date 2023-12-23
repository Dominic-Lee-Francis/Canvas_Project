/**
 * Adds click event listeners to the tool buttons.
 * When a tool button is clicked, it removes the 'active' class from all options,
 * adds the 'active' class to the clicked button, and sets the selected tool to the clicked option.
 */
toolBtns.forEach(btn => {
    btn.addEventListener('click', () => { //adds click event for tools
        document.querySelector(".options .active").classList.remove('active'); //removes active class from all options
        btn.classList.add('active'); //adds clicked option
        selectedTool = btn.id; //sets selected tool to clicked option
        console.log(selectedTool);
    });
 }); 