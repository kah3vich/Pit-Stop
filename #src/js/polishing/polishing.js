var polishingSliderVideo = new Swiper(".polishingSliderVideo", {
    navigation: {
        nextEl: ".disk-video__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".disk-video__block-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});


$('#polishingExampleTabsElement-1').on('click', function() {
    $('#polishingExampleTabsElement-1').addClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-1').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-2').on('click', function() {
    $('#polishingExampleTabsElement-2').addClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-2').removeClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-3').on('click', function() {
    $('#polishingExampleTabsElement-3').addClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-3').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-4').on('click', function() {
    $('#polishingExampleTabsElement-4').addClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')

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
});
