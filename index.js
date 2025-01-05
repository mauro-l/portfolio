const nav = document.getElementById("nav");
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const navContainer = document.getElementById("navBox");
const btnUp = document.getElementById("btnUp");
const heart = document.getElementById("heart");

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
  navContainer.style.backdropFilter = "none";
});

btnClose.addEventListener("click", () => {
  navContainer.style.backdropFilter = "blur(24px)";
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
      navContainer.style.backdropFilter = "blur(24px)";
    }
  });
});

/* boton heart like */

heart.addEventListener("click", () => {
  heart.classList.toggle("like");

  /* setTimeout(() => {
    heart.classList.remove("like");
  }, 1000); */
});
