// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuToggle.textContent =
      nav.classList.contains("open") ? "✕" : "☰";
  });
}

// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});

// Simple contact form interaction
function submitForm(event) {
  event.preventDefault();

  const message = document.getElementById("form-message");

  if (message) {
    message.textContent =
      "ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับโดยเร็วที่สุด ✦";
    message.style.color = "#ff713b";
  }

  event.target.reset();
}

// Reveal animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(".service, .project, .process-row")
  .forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";
    observer.observe(element);
  });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".visible").forEach(element => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  });
});

// Observer callback helper
const style = document.createElement("style");

style.textContent = `
  .service.visible,
  .project.visible,
  .process-row.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;

document.head.appendChild(style);
