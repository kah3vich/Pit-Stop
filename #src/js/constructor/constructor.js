$('.constructor-constructor__wrapper-controls-type').on('click', function() {
    $('.constructor-constructor__wrapper-controls-adds').toggleClass('display-n')
});
$('.constructor-constructor__wrapper-controls-adds-close').on('click', function() {
    $('.constructor-constructor__wrapper-controls-adds').addClass('display-n')
});



let constructors = {
    car: 1,
    disk: 1,
}

$('#constructorTypeCarColor-1').on('click', function() {
    const type = 1
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-2').on('click', function() {
    const type = 2
    constructors.car = type
    constructorsChecked()
});

$('#constructorTypeDiskColor-1').on('click', function() {
    const type = 1
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-2').on('click', function() {
    const type = 2
    constructors.disk = type
    constructorsChecked()
});

function constructorsChecked() {
    console.log(constructors)

    if(constructors.disk == 1 && constructors.car == 2) {
        $('#constructorCar').attr('src', './img/constructor/1-2.png')
    }
}


