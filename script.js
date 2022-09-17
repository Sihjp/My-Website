const preload = document.querySelector(".preload"),
      scrollY = document.querySelector("html");
window.addEventListener("load", () => {
    setTimeout(function() {
        preload.style.opacity = 0;
        scrollY.style.overflowY = "scroll";
    }, 1000)
})