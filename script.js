// Scroll-triggered animation
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.slide-left, .slide-right');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('slide-visible');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', handleScrollAnimations);
// Also run on page load in case elements are already in view
window.addEventListener('load', handleScrollAnimations);






//---------------------------------------------

// তোমার আগের JS এখানে থাকবে
// ...

// 🔁 Auto Slideshow Script


let currentIndex = 0;
const slideImg = document.getElementById("slideshow-image");
const slideshowImages = [
  ,
  
  "image/SSS.jpg",
  "image/Retouching.jpg",
  "image/before5.jpg",
  "image/before1.jpg",
  "image/jwalary.jpg",
  "image/path 1.png",
  "image/buR.jpg",
  "image/SAWdo.jpg",
  "image/sadw.jpg",
  "image/RE.jpg",
  "image/PREtan.jpg",
  "image/SS4S.jpg",
  "image/BGG.png",
];
 // ছবির path ঠিক রাখো

function changeSlide() {
  // fade out
  slideImg.classList.remove("fade-in");

  // wait for fade-out before changing image
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % slideshowImages.length;
    slideImg.src = slideshowImages[currentIndex];

    // fade in after image loads
    slideImg.onload = () => {
      slideImg.classList.add("fade-in");
    };
  }, 300); // delay before changing image
}

// Start with first image faded in
window.addEventListener("load", () => {
  slideImg.classList.add("fade-in");
  setInterval(changeSlide, 3000); // 3s interval
});





