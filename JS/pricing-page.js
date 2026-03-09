const billingToggle3 = document.getElementById("billingToggle3");
const billingOptions = billingToggle3.querySelectorAll(".lux-billing-option");
const priceValues = document.querySelectorAll(".lux-price-value");
const pricePeriods = document.querySelectorAll(".lux-price-period");

let activeMode = "daily";
billingToggle3.setAttribute("data-active", activeMode);

billingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    activeMode = option.dataset.mode;
    billingToggle3.setAttribute("data-active", activeMode);

    billingOptions.forEach((btn) => {
      const isActive = btn.dataset.mode === activeMode;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    priceValues.forEach((price) => {
      const value = price.dataset[activeMode];
      if (!value) return;
      price.textContent = "$" + Number(value).toLocaleString();
    });

    pricePeriods.forEach((period) => {
      if (period.textContent.includes("pricing")) return;

      if (activeMode === "daily") {
        period.textContent = "/ day";
      } else if (activeMode === "weekly") {
        period.textContent = "/ week";
      } else {
        period.textContent = "/ month";
      }
    });
  });
});
