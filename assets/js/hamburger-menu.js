document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const myName = document.getElementById("myName")
    const mobileDiv = document.getElementById("mobileDiv")

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
        myName.classList.toggle("hidden");
        myName.classList.toggle("invisible");
        mobileDiv.classList.toggle("hidden");
        mobileDiv.classList.toggle("invisible");
        mobileDiv.classList.toggle("flex");
    });
});