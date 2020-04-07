$(document).ready(function() {
    $('.card-img-top').hover(function() {
        $(this).fadeTo('fast', 0.45);
    }, function() {
        $(this).fadeTo('fast', 1);
    });
    $('.list-group-item').hover(function() {
        $(this).addClass('dark')
    }, function() {
        $(this).removeClass('dark')
    });
    $('#author').css('text-decoration', 'none');
    $('.card-img-top').click(function() {
        $(this).toggleClass('flip');
    });
    $('rotate').tooltip;
});