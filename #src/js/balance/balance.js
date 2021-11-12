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
    breakpoints: {
        1410: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        680: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    },
    loop: true,
});