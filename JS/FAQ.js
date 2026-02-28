// FAQ ACCORDION (only one open at a time)
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      faqItems.forEach((other) => {
        if (other !== item) {
          other.removeAttribute("open");
        }
      });
    }
  });
});
