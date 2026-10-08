// Mobile menu toggle + click/keyboard support for dropdowns.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      document.querySelectorAll(".has-sub.open").forEach((other) => {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".menu-btn").setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-sub")) {
      document.querySelectorAll(".has-sub.open").forEach((item) => {
        item.classList.remove("open");
        item.querySelector(".menu-btn").setAttribute("aria-expanded", "false");
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".has-sub.open").forEach((item) => item.classList.remove("open"));
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
