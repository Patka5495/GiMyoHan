$("#scrollTop").click(function(){
    console.log("click")
    $("html, body").animate({scrollTop: 0}, 700);
});

document.getElementById("nav_name").onclick = function(){
    window.scrollTo({ top: document.getElementById("name_section").offsetTop, behavior: "smooth" });
}