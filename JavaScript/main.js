const hamburger = document.querySelector(".header_nav_hamburger");
const hamburger_close = document.querySelector(".header_nav_hamburger_close");

hamburger.addEventListener("click", function () {
    document.getElementById("open_hamburger").style.display = "none";
    hamburger_close.classList.remove("close_hamburger");
    document.getElementById("header_nav_mobile").style.left = "30%";
});

hamburger_close.addEventListener("click", function () {
    document.getElementById("open_hamburger").style.display = "block";
    hamburger_close.classList.add("close_hamburger");
    document.getElementById("header_nav_mobile").style.left = "100%";
});
