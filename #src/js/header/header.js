$('#headerServicesButton').hover(function() {
    $('#headerServices').toggleClass('display-n')
});
$('#headerServices').hover(function() {
    $(this).toggleClass('display-n')
    $('#headerAddress').addClass('display-n')
});

$('#headerAddressButton').hover(function() {
    $('#headerAddress').toggleClass('display-n')
});
$('#headerAddress').hover(function() {
    $(this).toggleClass('display-n')
    $('#headerServices').addClass('display-n')
});


