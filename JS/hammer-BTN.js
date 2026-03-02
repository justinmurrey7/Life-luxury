document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const luxNav = document.getElementById("luxNav");

  if (!navToggle || !luxNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = luxNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close menu when a link is clicked on mobile
  luxNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 900) {
      luxNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
});
// js/hammer-btn.js
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const luxNav = document.getElementById("luxNav");

  if (!navToggle || !luxNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = luxNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close menu after tapping a link (mobile)
  luxNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 900) {
      luxNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });

  // Close on resize back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      luxNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });

  // Optional: close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      luxNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const luxNav = document.getElementById("luxNav");

  if (!navToggle || !luxNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = luxNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  luxNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 900) {
      luxNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      luxNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
});
