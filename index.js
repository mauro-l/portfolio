const nav = document.getElementById("nav");
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const navContainer = document.getElementById("navBox");

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
