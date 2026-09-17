const buttons = document.querySelectorAll(".add-button");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const director = this.closest(".director");
        director.classList.toggle("flipped");
        console.log("Button clicked for director:", director.querySelector("h3").textContent);
    });
});

document.querySelectorAll('.director').forEach(director => {
    const frontButton = director.querySelector('.director-front .add-button');
    const backButton = director.querySelector('.director-back .add-button');
    const inner = director.querySelector('.director-inner');
    frontButton.addEventListener('click', function (event) {
        event.stopPropagation();

        inner.classList.add('flipped');

        frontButton.style.display = 'none';
    });

    backButton.addEventListener('click', function (event) {
        event.stopPropagation();

        inner.classList.remove('flipped');

        frontButton.style.display = 'flex';
    });

});