$(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    centeredSlides: true,
    speed: 800,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // 768px以上の場合
      426: {
        slidesPerView: 2,
      },
      // 768px以上の場合
      768: {
        slidesPerView: 3.5,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
});