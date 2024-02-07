"use strict";

const lightLogo = document.getElementById("light-logo");
const clickIcon = document.getElementById("click-icon");

lightLogo.addEventListener('click', function () {
    lightLogo.style.display = "none";
    clickIcon.style.display = "block";
});

clickIcon.addEventListener('click', function () {
    lightLogo.style.display = "block";
    clickIcon.style.display = "none";
});