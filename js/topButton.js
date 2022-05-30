var topButton = document.getElementById("top_button");
window.addEventListener('scroll', () => { 
    //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
    // console.log(window.scrollX, window.scrollY);
    if(window.scrollY <= 1000){
        topButton.style.opacity = 0;
        topButton.style.cursor = "default";
    }
    else if(window.scrollY > 1000){
        topButton.style.opacity = 1;
        topButton.style.cursor = "pointer";
        topButton.onclick = function(){
            window.scrollTo({ top: 0, behavior: "smooth" });
        }        
    }
    if(topButton.style.opacity == 0){
        topButton.style.visibility = "hidden";
    }
    else if(topButton.style.opacity == 1){
        topButton.style.visibility = "visible";
    }
});
