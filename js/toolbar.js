toolBtns.forEach(btn => {
    btn.addEventListener('click', () => { //adds click event for tools
        document.querySelector(".options .active").classList.remove('active'); //removes active class from all options
        btn.classList.add('active'); //adds clicked option
        selectedTool = btn.id; //sets selected tool to clicked option
        console.log(selectedTool);
    });
 }); 