$(function() {
    $('h1').css('color', 'green');
    $('h1').html('Hello Again!');
});

$('#btn-open').click(function() {
    $('#message')
        .html('Обновыенное сообщение!')
        .css('background-color', 'green')
        .parent()
        .width(150)
        .height(80)
});

$('#btn-hide').click(function() {
    location.reload();
});
