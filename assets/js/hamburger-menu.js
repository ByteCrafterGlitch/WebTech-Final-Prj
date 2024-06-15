document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const myName = document.getElementById("myName")
    const mobileNav = document.getElementById("mobileNav")

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
        myName.classList.toggle("hidden");
        myName.classList.toggle("invisible");
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("invisible");
        mobileNav.classList.toggle("flex");
    });
});