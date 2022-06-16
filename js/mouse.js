let mouse = document.getElementById("mousehover");
let hoverSec = document.getElementById("hover_section");
let body = document.querySelector("body");
mouse.addEventListener("mouseover", function (){
        hoverSec.style.visibility = "visible";
        hoverSec.style.opacity = "1";
        body.style.backgroundColor = "#000";
    }
)
mouse.addEventListener("mouseleave", function (){
        hoverSec.style.visibility = "hidden";
        hoverSec.style.opacity = "0";
        body.style.backgroundColor = "#eff1f6"
    }
)