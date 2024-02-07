"use strict";

let box = document.getElementById('box');


function changeWidth() {
    if (box.style.width === "100%") {
        box.style.width = "70px";
    } else {
        box.style.width = "100%";
    }
}

box.onclick = changeWidth;   