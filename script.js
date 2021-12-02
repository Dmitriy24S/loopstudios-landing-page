const menuIcon = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  console.log("hi");
  menu.classList.toggle("show");
});
