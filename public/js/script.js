//! Header 

$('#headerSliderListItem-1').on('click', function() {
    $('.ind-header__block-title').html('Алмазная полировка автомобильных дисков')
    $('#headerSliderListItem-1').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
    $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
    $('.ind-header__block-banner-add p').html('002')
    $('#headerSliderPaginationItem-1').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
});
$('#headerSliderListItem-2').on('click', function() {
    $('.ind-header__block-title').html('Ремонт дисков')
    $('#headerSliderListItem-2').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
    $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
    $('.ind-header__block-banner-add p').html('003')
    $('#headerSliderPaginationItem-2').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
});
$('#headerSliderListItem-3').on('click', function() {
    $('.ind-header__block-title').html('Порошковая покраска')
    $('#headerSliderListItem-3').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
    $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
    $('.ind-header__block-banner-add p').html('004')
    $('#headerSliderPaginationItem-3').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
});
$('#headerSliderListItem-4').on('click', function() {
    $('.ind-header__block-title').html('Установка шин')
    $('#headerSliderListItem-4').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
    $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
    $('.ind-header__block-banner-add p').html('005')
    $('#headerSliderPaginationItem-4').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
});
$('#headerSliderListItem-5').on('click', function() {
    $('.ind-header__block-title').html('Покраска')
    $('#headerSliderListItem-5').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
    $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
    $('.ind-header__block-banner-add p').html('001')
    $('#headerSliderPaginationItem-5').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
});

let activeContentIndex = 0
let elementContentCount = 6

$('#headerSliderArrowPrev').on('click', function() {
    changeSlide('prev')
});
$('#headerSliderArrowNext').on('click', function() {
    changeSlide('next')
});
function changeSlide(id) { 
    if(id === 'next') {
        activeContentIndex++
        if (activeContentIndex === elementContentCount) {
            activeContentIndex = 0
        } 
    } else if (id === 'prev') {
        activeContentIndex--
        if (activeContentIndex < 0) {
            activeContentIndex = elementContentCount - 1
        }
    }
    if(activeContentIndex == 0) {
        $('.ind-header__block-title').html('Алмазная полировка автомобильных дисков')
        $('#headerSliderListItem-1').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
        $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
        $('.ind-header__block-banner-add p').html('002')
        $('#headerSliderPaginationItem-1').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
    if(activeContentIndex == 2) {
        $('.ind-header__block-title').html('Ремонт дисков')
        $('#headerSliderListItem-2').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
        $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
        $('.ind-header__block-banner-add p').html('003')
        $('#headerSliderPaginationItem-2').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
    if(activeContentIndex == 3) {
        $('.ind-header__block-title').html('Порошковая покраска')
        $('#headerSliderListItem-3').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
        $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
        $('.ind-header__block-banner-add p').html('004')
        $('#headerSliderPaginationItem-3').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
    if(activeContentIndex == 4) {
        $('.ind-header__block-title').html('Установка шин')
        $('#headerSliderListItem-4').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
        $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
        $('.ind-header__block-banner-add p').html('005')
        $('#headerSliderPaginationItem-4').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
    if(activeContentIndex == 5) {
        $('.ind-header__block-title').html('Покраска')
        $('#headerSliderListItem-5').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', './img/header-banner.png')
        $('.ind-header__block-banner-add img').attr('src', './img/header-banners.png')
        $('.ind-header__block-banner-add p').html('001')
        $('#headerSliderPaginationItem-5').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
    }
}

//! ---------------------------------------------------------------------------------



//! Example 


$('#indexExampleTabsElement-1').on('click', function() {
    $('#indexExampleTabsElement-1').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
});
$('#indexExampleTabsElement-2').on('click', function() {
    $('#indexExampleTabsElement-2').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
});
$('#indexExampleTabsElement-3').on('click', function() {
    $('#indexExampleTabsElement-3').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
});
$('#indexExampleTabsElement-4').on('click', function() {
    $('#indexExampleTabsElement-4').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
});
$('#indexExampleTabsElement-5').on('click', function() {
    $('#indexExampleTabsElement-5').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
});




//! ---------------------------------------------------------------------------------



//! Slider 


var indexSliderCars = new Swiper(".indexSliderCars", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
        nextEl: ".ind-slider__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-slider__block-slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".ind-slider__block-slider .swiper-controls .swiper-pagination",
    },
    keyboard: true,
});

$('#headerSliderTabsElement-1').on('click', function() {
    $('#headerSliderTabsElement-1').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-2').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-3').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-4').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-5').removeClass('ind-slider__block-tabs-item-active')
});
$('#headerSliderTabsElement-2').on('click', function() {
    $('#headerSliderTabsElement-2').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-1').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-3').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-4').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-5').removeClass('ind-slider__block-tabs-item-active')
});
$('#headerSliderTabsElement-3').on('click', function() {
    $('#headerSliderTabsElement-3').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-2').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-1').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-4').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-5').removeClass('ind-slider__block-tabs-item-active')
});
$('#headerSliderTabsElement-4').on('click', function() {
    $('#headerSliderTabsElement-4').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-2').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-3').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-1').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-5').removeClass('ind-slider__block-tabs-item-active')
});
$('#headerSliderTabsElement-5').on('click', function() {
    $('#headerSliderTabsElement-5').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-2').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-3').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-4').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-1').removeClass('ind-slider__block-tabs-item-active')
});


//! ---------------------------------------------------------------------------------


