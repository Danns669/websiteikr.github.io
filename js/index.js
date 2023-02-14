// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburgermenu diclick

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hamburger tidak aktif pada saat di klik diluar kolom
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle flipcard
