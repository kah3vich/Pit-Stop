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
    breakpoints: {
        1220: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        700: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
    }
});



$('.polishing-constructor__wrapper-controls-type').on('click', function() {
    $('.polishing-constructor__wrapper-controls-adds').toggleClass('display-n')
});
$('.polishing-constructor__wrapper-controls-adds-close').on('click', function() {
    $('.polishing-constructor__wrapper-controls-adds').addClass('display-n')
});




$('.modelPolishingSliders-close').on('click', function() {
    $('.modelPolishingSliders').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#polishingSlidersItems-1').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 0
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-2').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 1
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-3').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 2
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-4').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 3
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-5').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 4
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-6').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 5
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});







$('.modelPolishingExample-close').on('click', function() {
    $('.modelPolishingExample').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#polishingExampleItems-1').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 0
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-2').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 1
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-3').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 2
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-4').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 3
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-5').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 4
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-6').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 5
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-7').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 6
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-8').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 7
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-9').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 8
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-10').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 9
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-11').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 10
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-12').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 11
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-13').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 12
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-14').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 13
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-15').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 14
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-16').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 15
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-17').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 16
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-18').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 17
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-19').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 18
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-20').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 19
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-21').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 20
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-22').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 21
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-23').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 22
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-24').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 23
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-25').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 24
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-26').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 25
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-27').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 26
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-28').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 27
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-29').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 28
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-30').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 29
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-31').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 30
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-32').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 31
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-33').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 32
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-34').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 33
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-35').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 34
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-36').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 35
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-37').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 36
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-38').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 37
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-39').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 38
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-40').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 39
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-41').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 40
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-42').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 41
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-43').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 42
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-44').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 43
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-45').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 44
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-46').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 45
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-47').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 46
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-48').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 47
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-49').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 48
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-50').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 49
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-51').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 50
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-52').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 51
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});






//! Quiz


for (let i = 1; i < 10; i++) {
    $(`#polishingQuizBlock-${i}`).on('click', function() {
        $('.polishing-header__block-quiz-block').addClass('display-n')
        $('.polishing-header__block-quiz-new').removeClass('display-n')
        $('.polishing-header__block-quiz-add').html('Вопрос 2 из 5')
        $('.polishing-header__block-quiz-description').html('Рассматриваете новый авто или с пробегом?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#polishingQuizNew-${i}`).on('click', function() {
        $('.polishing-header__block-quiz-new').addClass('display-n')
        $('.polishing-header__block-quiz-type').removeClass('display-n')
        $('.polishing-header__block-quiz-add').html('Вопрос 3 из 5')
        $('.polishing-header__block-quiz-description').html('В каком типе кузова рассматриваете авто?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#polishingQuizType-${i}`).on('click', function() {
        $('.polishing-header__block-quiz-type').addClass('display-n')
        $('.polishing-header__block-quiz-bay').removeClass('display-n')
        $('.polishing-header__block-quiz-add').html('Вопрос 4 из 5')
        $('.polishing-header__block-quiz-description').html('Как срочно планируете покупку авто?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#polishingQuizBay-${i}`).on('click', function() {
        $('.polishing-header__block-quiz-bay').addClass('display-n')
        $('.polishing-header__block-quiz-messages').removeClass('display-n')
        $('.polishing-header__block-quiz-add').html('Вопрос 5 из 5')
        $('.polishing-header__block-quiz-description').html('Куда прислать каталог?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#polishingQuizMessages-${i}`).on('click', function() {
        $('.polishing-header__block-quiz-messages').addClass('display-n')
        $('.polishing-header__block-quiz-phone').removeClass('display-n')
        $('.polishing-header__block-quiz-add').html('Вопрос 5 из 5')
        $('.polishing-header__block-quiz-description').html('Введите номер телефона')
    })
}

$('.polishing-header__block-quiz-messages-checkbox__label').on('click', function() {
    for(let i = 1; i < 10; i++) {
        $(`#polishingQuizMessages-${i}`).toggleClass('blocking')
    }
})

$('.polishing-header__block-quiz-phone-checkbox__label').on('click', function() {
    for(let i = 1; i < 10; i++) {
        $(`#polishingQuizPhone-${i}`).toggleClass('blocking')
        $('.polishing-header__block-quiz-items-btn').toggleClass('blocking')
    }
})




$(function() {
    $('#phonep').css('display', 'none')
    $('#phonep').after('<div class="quiz__phone-select-item"><div class="quiz__phone-select-placeholder">+ 7</div><div id="listConstructorElementPhonep" class="quiz__phone-select-wrapper display-n"></div></div>')
    let count = $('#phonep').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#phonep').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("quiz__phone-select-element")
        newElementBlock.id = `quiz__phone-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("listConstructorElementPhonep").appendChild(newElementBlock);
        $(`#quiz__phone-select-element-${i}`).attr('value', `${arrows}`)
        $(`#quiz__phone-select-element-${i}`).attr('type', `button`)
    }
    $('#quiz__phone-select-element-0').css('display', 'none')
    $('.quiz__phone-select-item').on('click', function() {
        $('.quiz__phone-select-wrapper').toggleClass('display-n')
    })
    $(".quiz__phone-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.quiz__phone-select-placeholder').html(valueElement)
        $('#phonep option:nth-child(1)').val(valueElement)
        $('#phonep option:nth-child(1)').html(valueElement)
    })
})