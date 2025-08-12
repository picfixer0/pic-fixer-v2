function initComparisons() {
  const overlays = document.getElementsByClassName("img-comp-overlay");

  for (let i = 0; i < overlays.length; i++) {
    compareImages(overlays[i]);
  }

  function compareImages(img) {
    let clicked = false;
    const container = img.parentElement;
    const slider = container.getElementsByClassName("img-comp-slider")[0];
    const w = container.offsetWidth;
    const h = container.offsetHeight;

    img.style.width = (w / 2) + "px";
    slider.style.top = "0px";
    slider.style.left = (w / 2 - slider.offsetWidth / 2) + "px";

    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("mousemove", slideMove);

    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);
    window.addEventListener("touchmove", slideMove);

    function slideReady(e) {
      e.preventDefault();
      clicked = true;
    }

    function slideFinish() {
      clicked = false;
    }

    function slideMove(e) {
      let pos;
      if (clicked) {
        pos = getCursorPos(e);
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }
    }

    function getCursorPos(e) {
      const rect = container.getBoundingClientRect();
      let x = e.pageX - rect.left;
      if (e.touches) {
        x = e.touches[0].pageX - rect.left;
      }
      return x;
    }

    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = x - (slider.offsetWidth / 2) + "px";
    }
  }
}

window.onload = initComparisons;




//------------------------------------------------------------------------------------------------------------ For the image slider logic
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

