const toggleButtons = document.querySelectorAll(".ll-toggle-btn");
const allPrices = document.querySelectorAll(".price");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPlan = button.getAttribute("data-plan");

    toggleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    allPrices.forEach((price) => {
      price.classList.remove("active");
      if (price.classList.contains(selectedPlan)) {
        price.classList.add("active");
      }
    });
  });
});
