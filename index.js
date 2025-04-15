const nav = document.getElementById("nav");
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const navContainer = document.getElementById("navBox");
const switchMode = document.getElementById("darkMode");
const body = document.getElementById("body");

const btnUp = document.getElementById("btnUp");
const progressCircle = document.querySelector(".btn-arrowUp circle.progress");
const radius = 45;
const circumference = 2 * Math.PI * radius;

const heart = document.getElementById("heart");

/* dark mode */

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.add(savedTheme);

    if (savedTheme === "dark") {
      iconMoon.classList.remove("active");
      iconSun.classList.add("active");
    } else {
      iconMoon.classList.add("active");
      iconSun.classList.remove("active");
    }
  }
});

/* boton scroll */

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / docHeight;

  // Calculate the stroke offset
  const offset = circumference - progress * circumference;
  progressCircle.style.strokeDashoffset = offset;

  if (scrollTop > 150) {
    btnUp.classList.add("show-btn-up");
  } else {
    btnUp.classList.remove("show-btn-up");
  }
}

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", updateProgress);

updateProgress();

/* navbar */

const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");

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

switchMode.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    iconMoon.classList.remove("active");
    iconSun.classList.add("active");
  } else {
    localStorage.setItem("theme", "light");
    iconMoon.classList.add("active");
    iconSun.classList.remove("active");
  }
});

document.querySelectorAll("nav a").forEach((anchor) => {
  const href = anchor.getAttribute("href");

  // Solo aplica el scroll suave si el href comienza con "#" o es "#"
  if (href === "#") {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Desplazamiento suave hacia arriba
      });
    });
  } else if (href.startsWith("#")) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });

      if (nav.classList.contains("visible")) {
        nav.classList.remove("visible");
        navContainer.style.backdropFilter = "blur(24px)";
      }
    });
  }
});

/* boton heart like */

heart.addEventListener("click", () => {
  heart.classList.toggle("like");
});
