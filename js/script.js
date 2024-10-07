const hamburger = document.getElementById("hamburger");
const hamburgerX = document.getElementById("hamburger-x");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("hide");
  hamburgerX.classList.toggle("show");
});

hamburgerX.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("hide");
  hamburgerX.classList.toggle("show");
});
