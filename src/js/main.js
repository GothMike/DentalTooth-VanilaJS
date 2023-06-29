const hamburger = document.querySelector(".header__hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  overlay = document.querySelector(".header__overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("menu_active");
  overlay.classList.add("header__overlay_active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("menu_active");
  overlay.classList.remove("header__overlay_active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("menu_active");
  overlay.classList.remove("header__overlay_active");
});
