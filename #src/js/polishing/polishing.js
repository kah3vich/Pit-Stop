var polishingSliderVideo = new Swiper(".polishingSliderVideo", {
    navigation: {
        nextEl: ".polishing-video__block-slider  .swiper-controls .swiper-button-next",
        prevEl: ".polishing-video__block-slider  .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});


$('#polishingExampleTabsElement-1').on('click', function() {
    $('#polishingExampleTabsElement-1').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-1').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-2').on('click', function() {
    $('#polishingExampleTabsElement-2').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-2').removeClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-3').on('click', function() {
    $('#polishingExampleTabsElement-3').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-3').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-4').on('click', function() {
    $('#polishingExampleTabsElement-4').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-4').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
});



var polishingSlider = new Swiper(".polishingSlider", {
    navigation: {
        nextEl: ".polishing-slider__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".polishing-slider__block-slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".polishing-slider__block-slider .swiper-controls .swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 12,
    keyboard: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
            spaceBetweenSlides: 12
        },
        760: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
    }
});



var polishingSliderBlock = new Swiper(".polishingSliderBlock", {
    loop: true,
    navigation: {
        nextEl: ".polishing-slider__block-wrapper .swiper-controls .swiper-button-next",
        prevEl: ".polishing-slider__block-wrapper .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".polishing-slider__block-wrapper .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 0,
});



$('.polishing-constructor__wrapper-controls-type').on('click', function() {
    $('.polishing-constructor__wrapper-controls-adds').toggleClass('display-n')
});
$('.polishing-constructor__wrapper-controls-adds-close').on('click', function() {
    $('.polishing-constructor__wrapper-controls-adds').addClass('display-n')
});
