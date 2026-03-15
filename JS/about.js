document.addEventListener("DOMContentLoaded", function () {
  const revealItems = document.querySelectorAll(".ll-reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ll-in-view");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
});
/* experience section */

document.addEventListener("DOMContentLoaded", function () {
  const revealItems = document.querySelectorAll(".ll-exp-reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ll-exp-in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
});
