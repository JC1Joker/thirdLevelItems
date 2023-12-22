//swiper效果
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: true,
  autoplay: {
    delay: 1400,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
