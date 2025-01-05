const nav = document.getElementById("nav");
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const navContainer = document.getElementById("navBox");
const btnUp = document.getElementById("btnUp");

/* boton scroll */

window.onscroll = () => {
  if (document.documentElement.scrollTop > 150) {
    btnUp.classList.add("show-btn-up");
  } else {
    btnUp.classList.remove("show-btn-up");
  }
};

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* navbar */

btnOpen.addEventListener("click", () => {
  nav.classList.add("visible");
  navContainer.style.overflowX = "visible";
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("visible");
  setTimeout(() => {
    navContainer.style.overflowX = "hidden";
  }, 400);
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    if (nav.classList.contains("visible")) {
      nav.classList.remove("visible");
    }
  });
});
