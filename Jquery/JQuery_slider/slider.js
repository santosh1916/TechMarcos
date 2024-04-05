document.querySelector('.swiper-container').addEventListener('scroll', function() {
    let scrollPosition = this.scrollLeft;
    let cardWidth = document.querySelector('.swiper-slide').offsetWidth;
    let currentIndex = Math.round(scrollPosition / cardWidth);
    console.log('Current Index:', currentIndex);
  });
  
  