// For the image slider logic
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const container = slider.closest(".img-container");
  const afterImg = container.querySelector(".after-img");

  slider.addEventListener("input", () => {
    const value = slider.value;
    afterImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  });
});

// Header animated title effect
function restartAnimation() {
  const title = document.getElementById("animated-title");
  const spans = title.querySelectorAll("span");

  spans.forEach((span) => {
    const newSpan = span.cloneNode(true);
    span.parentNode.replaceChild(newSpan, span);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  restartAnimation();
  setInterval(restartAnimation, 3000);
});

// Before-After Image Slide (Photo Color Correction section)
(function () {
  const wrapper = document.getElementById("ba-wrapper");
  const slider = document.getElementById("ba-slider");
  const afterImg = document.getElementById("ba-after");

  let isDragging = false;

  slider.addEventListener("mousedown", () => {
    isDragging = true;
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  wrapper.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const rect = wrapper.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;
    slider.style.left = percent + "%";
    afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  });
})();
