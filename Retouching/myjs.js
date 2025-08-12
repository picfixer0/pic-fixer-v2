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
