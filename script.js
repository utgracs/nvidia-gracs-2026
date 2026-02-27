const yearTarget = document.getElementById("year");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const faqItems = Array.from(document.querySelectorAll(".faq-list details"));
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }
    faqItems.forEach((other) => {
      if (other !== item) {
        other.open = false;
      }
    });
  });
});
