var topButton = document.getElementById("top_button");
window.addEventListener("scroll", () => {
  if (window.scrollY <= 1000) {
    topButton.style.opacity = 0;
    topButton.style.cursor = "default";
  } else if (window.scrollY > 1000) {
    topButton.style.opacity = 1;
    topButton.style.cursor = "pointer";
  }
  if (topButton.style.opacity == 0) {
    topButton.style.visibility = "hidden";
  } else if (topButton.style.opacity == 1) {
    topButton.style.visibility = "visible";
  }
});
topButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("click");
};
