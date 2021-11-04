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