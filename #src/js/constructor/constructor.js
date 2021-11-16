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
$('#constructorTypeCarColor-3').on('click', function() {
    const type = 3
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-4').on('click', function() {
    const type = 4
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-5').on('click', function() {
    const type = 5
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-6').on('click', function() {
    const type = 6
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

    if(constructors.disk == 1 && constructors.car == 1) {
        $('#constructorCar').attr('src', './img/constructor/1-1.png')
    }
    if(constructors.disk == 1 && constructors.car == 2) {
        $('#constructorCar').attr('src', './img/constructor/2-1.png')
    }
    if(constructors.disk == 1 && constructors.car == 3) {
        $('#constructorCar').attr('src', './img/constructor/3-1.png')
    }
    if(constructors.disk == 1 && constructors.car == 4) {
        $('#constructorCar').attr('src', './img/constructor/4-1.png')
    }
    if(constructors.disk == 1 && constructors.car == 5) {
        $('#constructorCar').attr('src', './img/constructor/5-1.png')
    }
    if(constructors.disk == 1 && constructors.car == 6) {
        $('#constructorCar').attr('src', './img/constructor/6-1.png')
    }

    if(constructors.disk == 2 && constructors.car == 1) {
        $('#constructorCar').attr('src', './img/constructor/1-2.png')
    }
    if(constructors.disk == 2 && constructors.car == 2) {
        $('#constructorCar').attr('src', './img/constructor/2-2.png')
    }
    if(constructors.disk == 2 && constructors.car == 3) {
        $('#constructorCar').attr('src', './img/constructor/3-2.png')
    }
    if(constructors.disk == 2 && constructors.car == 4) {
        $('#constructorCar').attr('src', './img/constructor/4-2.png')
    }
    if(constructors.disk == 2 && constructors.car == 5) {
        $('#constructorCar').attr('src', './img/constructor/5-2.png')
    }
    if(constructors.disk == 2 && constructors.car == 6) {
        $('#constructorCar').attr('src', './img/constructor/6-2.png')
    }

}


