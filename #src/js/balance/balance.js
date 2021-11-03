var balanceSliderAbout = new Swiper(".balanceSliderAbout", {
    navigation: {
        nextEl: ".balance-ways__slider .swiper-controls .swiper-button-next",
        prevEl: ".balance-ways__slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".balance-ways__slider .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 0,
});