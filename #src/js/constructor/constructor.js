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
$('#constructorTypeDiskColor-3').on('click', function() {
    const type = 3
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-4').on('click', function() {
    const type = 4
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-5').on('click', function() {
    const type = 5
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-6').on('click', function() {
    const type = 6
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-7').on('click', function() {
    const type = 7
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-8').on('click', function() {
    const type = 8
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-9').on('click', function() {
    const type = 9
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-10').on('click', function() {
    const type = 10
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-11').on('click', function() {
    const type = 11
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-12').on('click', function() {
    const type = 12
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-13').on('click', function() {
    const type = 13
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-14').on('click', function() {
    const type = 14
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-15').on('click', function() {
    const type = 15
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-16').on('click', function() {
    const type = 16
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-17').on('click', function() {
    const type = 17
    constructors.disk = type
    constructorsChecked()
});

function constructorsChecked() {
    for (let j = 1; j < 18; j++) {
        for (let i = 1; i < 7; i++) {
            if(constructors.disk == j && constructors.car == i) {
                $('#constructorCar').attr('src', `./img/constructor/${i}-${j}.png`)
            }
        }
    }
}


