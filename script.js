const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
}

// every button with a data-target switches to that screen
document.querySelectorAll("[data-target]").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.target));
});
