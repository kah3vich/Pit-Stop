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
