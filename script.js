const screens = document.querySelectorAll(".screen");
const openBtn = document.getElementById("open-btn");
const portfolioButtons = document.querySelectorAll(".portfolio-buttons button");
const backButtons = document.querySelectorAll(".back-btn");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// open portfolio
openBtn.addEventListener("click", () => showScreen("portfolio"));

// open subpages
portfolioButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    showScreen(target);
  });
});

// back btns
backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    showScreen(target);
  });
});