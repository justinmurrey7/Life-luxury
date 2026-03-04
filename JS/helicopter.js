const navToggle = document.getElementById("navToggle");
const luxNav = document.getElementById("luxNav");

if (navToggle && luxNav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.classList.toggle("is-open");
    luxNav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
