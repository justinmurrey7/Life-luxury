(function () {
  const toggleBtn = document.getElementById("billingToggle");
  let isYearly = false;

  function setBilling(yearly) {
    isYearly = yearly;
    toggleBtn.setAttribute("aria-pressed", String(isYearly));
    toggleBtn.classList.toggle("is-yearly", isYearly);

    document.querySelectorAll(".lux-amount").forEach((el) => {
      el.textContent = isYearly ? el.dataset.year : el.dataset.month;
    });
    document.querySelectorAll(".lux-per").forEach((el) => {
      el.textContent = isYearly ? el.dataset.year : el.dataset.month;
    });
    document.querySelectorAll(".lux-billed").forEach((el) => {
      el.textContent = isYearly ? el.dataset.year : el.dataset.month;
    });
  }

  toggleBtn.addEventListener("click", () => setBilling(!isYearly));
  setBilling(false);

  // Reveal-on-scroll animation
  const cards = document.querySelectorAll(".lux-card");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  cards.forEach((c) => io.observe(c));
})();
