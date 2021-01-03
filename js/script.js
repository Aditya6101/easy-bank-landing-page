const nav = document.querySelector("nav");
const burgerMenu = document.querySelector(".burger-menu");
const introSection = document.querySelector(".intro-section");

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  introSection.classList.toggle("blur");
});
