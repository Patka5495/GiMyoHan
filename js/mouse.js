let mouse = document.getElementById("mousehover");
mouse.addEventListener("mouseover", function (){
    document.getElementById("hover_section").style.opacity = "1";
    document.querySelector("body").style.backgroundColor = "#000";
    }
)
mouse.addEventListener("mouseleave", function (){
    document.getElementById("hover_section").style.opacity = "0";
    document.querySelector("body").style.backgroundColor = "#eff1f6"
    }
)