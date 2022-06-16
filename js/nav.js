// dom
const GNB = document.getElementById("top_nav");

let isTop = true;

if (window.scrollY <= 0) {
  isTop = true;
}

// events
document.getElementById("nav_intro").onclick = function () {
  window.scrollTo({ top: 1150, behavior: "smooth" });
};
document.getElementById("nav_service").onclick = function () {
  window.scrollTo({ top: 5050, behavior: "smooth" });
};
document.getElementById("nav_design").onclick = function () {
  window.scrollTo({ top: 13050, behavior: "smooth" });
};
document.getElementById("nav_team").onclick = function () {
  window.scrollTo({ top: 14550, behavior: "smooth" });
};

document.addEventListener("scroll", function () {
  if (window.scrollY > 1000) {
    GNB.style.top = "-85px";
  } else if (window.scrollY <= 1000) {
    GNB.style.top = "0px";
  }

  if (window.scrollY <= 1000) {
    isTop = true;
  } else {
    isTop = false;
  }
});

window.onmousemove = function (e) {
  if (e.clientY >= 80 && !isTop) {
    // 감추기
    GNB.style.top = "-85px";
  } else if (e.clientY < 80 && !isTop) {
    // 나오기
    GNB.style.top = "0px";
  }
};
