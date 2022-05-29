// 컬러 영역
let isVisible = false;
window.addEventListener('scroll', function() {
    if ( checkVisible($('#sec7_null')) && !isVisible) {
        // alert("엘리먼트 보임 !!");
        isVisible=true;
        document.querySelector("#color2").style.left = "430px";
        document.querySelector("#color3").style.left = "860px";
        document.querySelector("#color_code1").style.opacity = "1";
        document.querySelector("#color_code2").style.opacity = "1";
        document.querySelector("#color_code3").style.opacity = "1";
    }
});
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}