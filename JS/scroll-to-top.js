// BACK TO TOP
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// CONCIERGE CHAT BUTTON (simple starter behavior)
// Option A: Open your contact page
const chatBtn = document.getElementById("luxChatBtn");
chatBtn.addEventListener("click", () => {
  window.location.href = "contact.html";
});

// Optional: show/hide back-to-top based on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    backToTop.style.opacity = "1";
    backToTop.style.pointerEvents = "auto";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.pointerEvents = "none";
  }
});

// start hidden
backToTop.style.opacity = "0";
backToTop.style.pointerEvents = "none";
