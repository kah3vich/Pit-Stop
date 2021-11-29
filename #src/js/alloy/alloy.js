var alloySliderVideo = new Swiper(".alloySliderVideo", {
    navigation: {
        nextEl: ".alloy-video__block-slider  .swiper-controls .swiper-button-next",
        prevEl: ".alloy-video__block-slider  .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});




//! Quiz


for (let i = 1; i < 10; i++) {
    $(`#alloyQuizBlock-${i}`).on('click', function() {
        $('.alloy-header__block-quiz-block').addClass('display-n')
        $('.alloy-header__block-quiz-new').removeClass('display-n')
        $('.alloy-header__block-quiz-add').html('Вопрос 2 из 5')
        $('.alloy-header__block-quiz-description').html('Рассматриваете новый авто или с пробегом?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#alloyQuizNew-${i}`).on('click', function() {
        $('.alloy-header__block-quiz-new').addClass('display-n')
        $('.alloy-header__block-quiz-type').removeClass('display-n')
        $('.alloy-header__block-quiz-add').html('Вопрос 3 из 5')
        $('.alloy-header__block-quiz-description').html('В каком типе кузова рассматриваете авто?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#alloyQuizType-${i}`).on('click', function() {
        $('.alloy-header__block-quiz-type').addClass('display-n')
        $('.alloy-header__block-quiz-bay').removeClass('display-n')
        $('.alloy-header__block-quiz-add').html('Вопрос 4 из 5')
        $('.alloy-header__block-quiz-description').html('Как срочно планируете покупку авто?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#alloyQuizBay-${i}`).on('click', function() {
        $('.alloy-header__block-quiz-bay').addClass('display-n')
        $('.alloy-header__block-quiz-messages').removeClass('display-n')
        $('.alloy-header__block-quiz-add').html('Вопрос 5 из 5')
        $('.alloy-header__block-quiz-description').html('Куда прислать каталог?')
    })
}
for (let i = 1; i < 10; i++) {
    $(`#alloyQuizMessages-${i}`).on('click', function() {
        $('.alloy-header__block-quiz-messages').addClass('display-n')
        $('.alloy-header__block-quiz-phone').removeClass('display-n')
        $('.alloy-header__block-quiz-add').html('Вопрос 5 из 5')
        $('.alloy-header__block-quiz-description').html('Введите номер телефона')
    })
}

$('.alloy-header__block-quiz-messages-checkbox__label').on('click', function() {
    for(let i = 1; i < 10; i++) {
        $(`#alloyQuizMessages-${i}`).toggleClass('blocking')
    }
})

$('.alloy-header__block-quiz-phone-checkbox__label').on('click', function() {
    for(let i = 1; i < 10; i++) {
        $(`#alloyQuizPhone-${i}`).toggleClass('blocking')
        $('.alloy-header__block-quiz-items-btn').toggleClass('blocking')
    }
})




$(function() {
    $('#phonea').css('display', 'none')
    $('#phonea').after('<div class="quiz__phone-select-item"><div class="quiz__phone-select-placeholder">+ 7</div><div id="listConstructorElementPhonea" class="quiz__phone-select-wrapper display-n"></div></div>')
    let count = $('#phonea').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#phonea').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("quiz__phone-select-element")
        newElementBlock.id = `quiz__phone-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("listConstructorElementPhonea").appendChild(newElementBlock);
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
        $('#phonea option:nth-child(1)').val(valueElement)
        $('#phonea option:nth-child(1)').html(valueElement)
    })
})