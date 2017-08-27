$('a').click(function(event) {
    alert('Hello');
    //event.preventDefault();
    //event.stopPropagation();
    return false;
});

$('.block').click(function(event) {
   alert('This is Block!');
});

$('#input').keyup(function(event) {
   var value = $(this).val();
   $('#message').text(value);
});