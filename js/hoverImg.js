// 기능 소개 영역
var dt1 = document.getElementById("dt1");
var dt2 = document.getElementById("dt2");
var dt3 = document.getElementById("dt3");
var dt4 = document.getElementById("dt4");
var dd1 = document.getElementById("dd1");
var dd2 = document.getElementById("dd2");
var dd3 = document.getElementById("dd3");
var dd4 = document.getElementById("dd4");
var hoverImg1 = document.getElementById("hover_view_img1");
var hoverImg2 = document.getElementById("hover_view_img2");
var hoverImg3 = document.getElementById("hover_view_img3");
var hoverImg4 = document.getElementById("hover_view_img4");

    // for(var i=1; i<5; i++){
    //     document.getElementById("dt"+i).addEventListener("mouseover", function(){
    //         document.getElementById("dd"+i).style.visibility = "visible";
    //         document.getElementById("dd"+i).style.opacity  = "1";
    //         document.getElementById("hover_view_img"+i).style.visibility = "visible";
    //         document.getElementById("hover_view_img"+i).style.opacity = "1";
    //     })
    //     document.getElementById("dt"+i).addEventListener("mouseout", function(){
    //         document.getElementById("dd"+i).style.opacity  = "0";
    //         document.getElementById("hover_view_img"+i).style.opacity  = "0";
    //     })
    // }
    // 안해


dt1.addEventListener("mouseover", function(){
    dd1.style.visibility = "visible";
    dd1.style.opacity = "1";
    hoverImg1.style.visibility = "visible";
    hoverImg1.style.opacity = "1";
})
dt1.addEventListener("mouseout", function(){
    dd1.style.opacity = "0";
    hoverImg1.style.opacity = "0";
})
dt2.addEventListener("mouseover", function(){
    dd2.style.visibility = "visible";
    dd2.style.opacity = "1";
    hoverImg2.style.visibility = "visible";
    hoverImg2.style.opacity = "1";
})
dt2.addEventListener("mouseout", function(){
    dd2.style.opacity = "0";
    hoverImg2.style.opacity = "0";
})
dt3.addEventListener("mouseover", function(){
    dd3.style.visibility = "visible";
    dd3.style.opacity = "1";
    hoverImg3.style.visibility = "visible";
    hoverImg3.style.opacity = "1";
})
dt3.addEventListener("mouseout", function(){
    dd3.style.opacity = "0";
    hoverImg3.style.opacity = "0";
})
dt4.addEventListener("mouseover", function(){
    dd4.style.visibility = "visible";
    dd4.style.opacity = "1";
    hoverImg4.style.visibility = "visible";
    hoverImg4.style.opacity = "1";
})
dt4.addEventListener("mouseout", function(){
    dd4.style.opacity = "0";
    hoverImg4.style.opacity = "0";
})