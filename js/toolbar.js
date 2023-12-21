toolBtns.forEach(btn => {
    btn.addEventListener('click', () => { //adds click event for tools
        document.querySelector('.options .active').classList.remove('active'); //removes active class from all options
        btn.classList.add('active'); //adds clicked option
         console.log(btn.id);
    });
 });