const nav = document.querySelector("nav");
const navTopOffset = nav.offsetTop;
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= navTopOffset) {
    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.left = 0;
    nav.style.right = 0;
  } else {
    nav.style.position = "";
    nav.style.top = "";
  }
});
