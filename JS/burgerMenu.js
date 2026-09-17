// HTML elements
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const menu = document.querySelector("#menu");
const burger = menu.querySelector(".burger-menu");

console.log(menuButton)

menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    burger.style.animation = "openBurger 1s";
});

closeButton.addEventListener("click", () => {
    burger.style.animation = "closeBurger 1.5s";
    setTimeout(() => menu.classList.toggle("hidden"), 1000);
});