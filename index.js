const nav = document.getElementById("nav");
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");

btnOpen.addEventListener("click", () => {
  nav.classList.add("visible");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("visible");
});
