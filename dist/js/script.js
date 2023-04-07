// Hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar on scorll
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  window.pageYOffset > fixedNav
    ? header.classList.add("navbar-fixed")
    : header.classList.remove("navbar-fixed");
};
