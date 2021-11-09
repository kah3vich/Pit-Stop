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
    // $('#headerSliderListItem-1').addClass('blocking')
    // $('#headerSliderListItem-2').removeClass('blocking')
    // $('#headerSliderListItem-3').removeClass('blocking')
    // $('#headerSliderListItem-4').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(0)
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
    // $('#headerSliderListItem-2').addClass('blocking')
    // $('#headerSliderListItem-1').removeClass('blocking')
    // $('#headerSliderListItem-3').removeClass('blocking')
    // $('#headerSliderListItem-4').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(1)
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
    // $('#headerSliderListItem-3').addClass('blocking')
    // $('#headerSliderListItem-1').removeClass('blocking')
    // $('#headerSliderListItem-2').removeClass('blocking')
    // $('#headerSliderListItem-4').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(2)
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
    // $('#headerSliderListItem-4').addClass('blocking')
    // $('#headerSliderListItem-1').removeClass('blocking')
    // $('#headerSliderListItem-2').removeClass('blocking')
    // $('#headerSliderListItem-3').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(3)
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
    // $('#headerSliderListItem-5').addClass('blocking')
    // $('#headerSliderListItem-4').removeClass('blocking')
    // $('#headerSliderListItem-3').removeClass('blocking')
    // $('#headerSliderListItem-2').removeClass('blocking')
    // $('#headerSliderListItem-1').removeClass('blocking')
    changeSlide(4)
});

let activeContentIndex = 0
let elementContentCount = 5

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
    if(id == 0) {
        activeContentIndex = 0
        $('#headerSliderListItem-1').addClass('blocking')
        $('#headerSliderListItem-2').removeClass('blocking')
        $('#headerSliderListItem-3').removeClass('blocking')
        $('#headerSliderListItem-4').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    if(id == 1) {
        activeContentIndex = 1
        $('#headerSliderListItem-2').addClass('blocking')
        $('#headerSliderListItem-1').removeClass('blocking')
        $('#headerSliderListItem-3').removeClass('blocking')
        $('#headerSliderListItem-4').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    if(id == 2) {
        activeContentIndex = 2
        $('#headerSliderListItem-3').addClass('blocking')
        $('#headerSliderListItem-2').removeClass('blocking')
        $('#headerSliderListItem-1').removeClass('blocking')
        $('#headerSliderListItem-4').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    if(id == 3) {
        activeContentIndex = 3
        $('#headerSliderListItem-4').addClass('blocking')
        $('#headerSliderListItem-2').removeClass('blocking')
        $('#headerSliderListItem-3').removeClass('blocking')
        $('#headerSliderListItem-1').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    if(id == 4) {
        activeContentIndex = 4
        $('#headerSliderListItem-5').addClass('blocking')
        $('#headerSliderListItem-2').removeClass('blocking')
        $('#headerSliderListItem-3').removeClass('blocking')
        $('#headerSliderListItem-4').removeClass('blocking')
        $('#headerSliderListItem-1').removeClass('blocking')
    }
    console.log(activeContentIndex)
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
    if(activeContentIndex == 1) {
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
    if(activeContentIndex == 2) {
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
    if(activeContentIndex == 3) {
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
    if(activeContentIndex == 4) {
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
    $('#indexExampleTabsBlock-1').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-2').on('click', function() {
    $('#indexExampleTabsElement-2').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-2').removeClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-3').on('click', function() {
    $('#indexExampleTabsElement-3').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-3').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-4').on('click', function() {
    $('#indexExampleTabsElement-4').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-4').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-5').on('click', function() {
    $('#indexExampleTabsElement-5').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-5').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
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
    breakpoints: {
        1435: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        1125: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        700: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
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



//! Price 



$(function() {
    $('#type').css('display', 'none')
    $('#type').after('<div class="type-select-item"><div class="type-select-placeholder">Тип диска</div><div id="typePriceSelect" class="type-select-wrapper display-n"></div></div>')
    let count = $('#type').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#type').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("type-select-element")
        newElementBlock.id = `type-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("typePriceSelect").appendChild(newElementBlock);
        $(`#type-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#type-select-element-0').css('display', 'none')
    $('.type-select-item').on('click', function() {
        $('.type-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('type-select-item-active')
    })
    $(".type-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.type-select-placeholder').html(valueElement)
        $('#type option:nth-child(1)').val(valueElement)
        $('#type option:nth-child(1)').html(valueElement)
    })
})
$(function() {
    $('#count').css('display', 'none')
    $('#count').after('<div class="count-select-item"><div class="count-select-placeholder">Количество дисков</div><div id="countPriceSelect" class="count-select-wrapper display-n"></div></div>')
    let count = $('#count').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#count').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("count-select-element")
        newElementBlock.id = `count-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("countPriceSelect").appendChild(newElementBlock);
        $(`#count-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#count-select-element-0').css('display', 'none')
    $('.count-select-item').on('click', function() {
        $('.count-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('count-select-item-active')
    })
    $(".count-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.count-select-placeholder').html(valueElement)
        $('#count option:nth-child(1)').val(valueElement)
        $('#count option:nth-child(1)').html(valueElement)
    })
})
$(function() {
    $('#radios').css('display', 'none')
    $('#radios').after('<div class="radios-select-item"><div class="radios-select-placeholder">Тип диска</div><div id="radiosPriceSelect" class="radios-select-wrapper display-n"></div></div>')
    let count = $('#radios').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#radios').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("radios-select-element")
        newElementBlock.id = `radios-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("radiosPriceSelect").appendChild(newElementBlock);
        $(`#radios-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#radios-select-element-0').css('display', 'none')
    $('.radios-select-item').on('click', function() {
        $('.radios-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('radios-select-item-active')
    })
    $(".radios-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.radios-select-placeholder').html(valueElement)
        $('#radios option:nth-child(1)').val(valueElement)
        $('#radios option:nth-child(1)').html(valueElement)
    })
})



window.addEventListener('scroll', function() {
    if(pageYOffset > 50) {
        $('header').css('background', '#171725')
    } else {
        $('header').css('background', 'transparent')
    }
});

var diskSliderVideo = new Swiper(".diskSliderVideo", {
    navigation: {
        nextEl: ".disk-video__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".disk-video__block-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});


$('#diskExampleTabsElement-1').on('click', function() {
    $('#diskExampleTabsElement-1').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-1').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-2').on('click', function() {
    $('#diskExampleTabsElement-2').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-2').removeClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-3').on('click', function() {
    $('#diskExampleTabsElement-3').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-3').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-4').on('click', function() {
    $('#diskExampleTabsElement-4').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-4').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-5').on('click', function() {
    $('#diskExampleTabsElement-5').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-5').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-6').on('click', function() {
    $('#diskExampleTabsElement-6').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-6').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-7').on('click', function() {
    $('#diskExampleTabsElement-7').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-7').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-8').on('click', function() {
    $('#diskExampleTabsElement-8').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-8').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-9').on('click', function() {
    $('#diskExampleTabsElement-9').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-9').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-10').on('click', function() {
    $('#diskExampleTabsElement-10').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-10').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-11').on('click', function() {
    $('#diskExampleTabsElement-11').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-11').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-12').on('click', function() {
    $('#diskExampleTabsElement-12').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-12').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-13').on('click', function() {
    $('#diskExampleTabsElement-13').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-13').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-14').on('click', function() {
    $('#diskExampleTabsElement-14').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-14').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-15').on('click', function() {
    $('#diskExampleTabsElement-15').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-15').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-16').on('click', function() {
    $('#diskExampleTabsElement-16').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-16').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-17').on('click', function() {
    $('#diskExampleTabsElement-17').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-17').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-18').on('click', function() {
    $('#diskExampleTabsElement-18').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-18').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-19').on('click', function() {
    $('#diskExampleTabsElement-19').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-19').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-20').on('click', function() {
    $('#diskExampleTabsElement-20').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-20').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
});
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

var paintSliderVideo = new Swiper(".paintSliderVideo", {
    navigation: {
        nextEl: ".paint-video__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".paint-video__block-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});


$('#paintExampleTabsElement-1').on('click', function() {
    $('#paintExampleTabsElement-1').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-2').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-3').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-4').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-1').removeClass('display-n')
    $('#paintExampleTabsBlock-2').addClass('display-n')
    $('#paintExampleTabsBlock-3').addClass('display-n')
    $('#paintExampleTabsBlock-4').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});

$('#paintExampleTabsElement-2').on('click', function() {
    $('#paintExampleTabsElement-2').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-1').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-3').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-4').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-2').removeClass('display-n')
    $('#paintExampleTabsBlock-1').addClass('display-n')
    $('#paintExampleTabsBlock-3').addClass('display-n')
    $('#paintExampleTabsBlock-4').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});

$('#paintExampleTabsElement-3').on('click', function() {
    $('#paintExampleTabsElement-3').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-2').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-1').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-4').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-3').removeClass('display-n')
    $('#paintExampleTabsBlock-2').addClass('display-n')
    $('#paintExampleTabsBlock-1').addClass('display-n')
    $('#paintExampleTabsBlock-4').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});

$('#paintExampleTabsElement-4').on('click', function() {
    $('#paintExampleTabsElement-4').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-2').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-3').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-1').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-4').removeClass('display-n')
    $('#paintExampleTabsBlock-2').addClass('display-n')
    $('#paintExampleTabsBlock-3').addClass('display-n')
    $('#paintExampleTabsBlock-1').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});


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
    }
});
var alloySliderVideo = new Swiper(".alloySliderVideo", {
    navigation: {
        nextEl: ".alloy-video__block-slider  .swiper-controls .swiper-button-next",
        prevEl: ".alloy-video__block-slider  .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});

$('#reviewsOpenMessages').on('click', function() {
    $(this).addClass('display-n')
    $('#reviewsElementMessages-1').removeClass('display-n')
    $('#reviewsElementMessages-2').removeClass('display-n')
    $('#reviewsElementMessages-3').removeClass('display-n')
    $('#reviewsCloseMessages').removeClass('display-n')
});
$('#reviewsCloseMessages').on('click', function() {
    $(this).addClass('display-n')
    $('#reviewsElementMessages-1').addClass('display-n')
    $('#reviewsElementMessages-2').addClass('display-n')
    $('#reviewsElementMessages-3').addClass('display-n')
    $('#reviewsOpenMessages').removeClass('display-n')
});
$('#headerServicesButton').hover(function() {
    $('#headerServices').toggleClass('display-n')
});
$('#headerServices').hover(function() {
    $(this).toggleClass('display-n')
});