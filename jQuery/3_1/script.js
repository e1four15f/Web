$('.item').click(function() {
    $(this).hide(500);
});

$('#itemCallback').hide('slow', function() {
    //alert('Hello');
    console.log('Callback');
});

$('.box h2').click(function(event) {
   $(this).next().slideToggle(800);
});