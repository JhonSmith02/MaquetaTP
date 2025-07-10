const swiper = new Swiper(".mySwiper", {
   
    effect: "cards",
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });



  const configs = [
    {main: '.swiperMain', thumbs: '.swiperThumbs'},
    {main: '.swiperMainMedellin', thumbs: '.swiperThumbsMedellin'},
    {main: '.swiperMainBarranquilla', thumbs: '.swiperThumbsBarranquilla'}
  ];

configs.forEach(cfg => {
  const thumbSwiper = new Swiper(cfg.thumbs, {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,   
      watchSlidesProgress: true,
  });

  new Swiper(cfg.main, {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: `${cfg.main} .swiper-button-next`,
      prevEl: `${cfg.main} .swiper-button-prev`,
    },
  thumbs: {
    swiper: thumbSwiper,
   },
  });
});

// // Inicializa miniaturas primero
// const thumbSwiper = new Swiper(".swiperThumbs", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });

// // Inicializa swiper principal y linkea con miniaturas
// const mainSwiper = new Swiper(".swiperMain", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: thumbSwiper,
//   },
//   loop: true,
// });
