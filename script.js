document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  if (!container) return;

  const message = document.createElement("p");
  message.textContent = "This page is powered by a separate JavaScript file. Update script.js to add interactivity.";
  message.style.marginTop = "24px";
  message.style.fontWeight = "600";
  message.style.color = "#0f172a";

  container.appendChild(message);
});
