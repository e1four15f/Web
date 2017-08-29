//$.fx.off = true;

window.onscroll = function(event) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled);
    $('.gradient').css({
        background: 'linear-gradient('+scrolled/2+'deg, red, blue)'
    });
};

$('.item').click(function() {
    $(this).fadeOut(500);
    $(this).fadeIn(500);
});

$('.item').animate({
    opacity: '0.5',
    height: '50px',
    width: '150px'
}).animate({
    width: '100px'
});

$('#itemCallback').fadeTo('slow', 0.4, function() {
    console.log('Callback');
});

$('.box h2').click(function(event) {
   $(this).next().fadeToggle(800);
});