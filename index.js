const nav = document.getElementById("nav");
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const navContainer = document.getElementById("navBox");

const btnUp = document.getElementById("btnUp");
const progressCircle = document.querySelector(".btn-arrowUp circle.progress");
const radius = 45;
const circumference = 2 * Math.PI * radius;

const heart = document.getElementById("heart");

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

/* window.onscroll = () => {
  if (document.documentElement.scrollTop > 150) {
    btnUp.classList.add("show-btn-up");
  } else {
    btnUp.classList.remove("show-btn-up");
  }
}; */

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", updateProgress);

updateProgress();

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
});
