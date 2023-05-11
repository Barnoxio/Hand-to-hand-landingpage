let carouselItems = document.querySelector('.carousel-items');
let carouselItemWidth = document.querySelector('.carousel-items img').clientWidth;
let carouselItemCount = document.querySelectorAll('.carousel-items img').length;
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex > carouselItemCount - 1) {
    currentIndex = 0;
  }
  carouselItems.style.transform = `translateX(-${currentIndex * carouselItemWidth}px)`;
}, 3000);
