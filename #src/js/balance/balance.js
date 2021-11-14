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
});




$('.modelBalanceSlider-close ').on('click', function() {
    $('.modelBalanceSlider').addClass('display-n')
    $('body').css('overflow', 'visible')
});
$('#balanceSlidersItems-1').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 0
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-2').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 1
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-3').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 2
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-4').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 3
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-5').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 4
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-6').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 5
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});