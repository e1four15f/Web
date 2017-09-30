$(document).ready(function() {

    var ms = 50000;

    $('.next').click(function() {
       var currentImage = $('.img.curry');
       var currentImageIndex = $('.img.curry').index();
       var nextImageIndex = currentImageIndex + 1;
       var nextImage = $('.img').eq(nextImageIndex);

       currentImage.fadeOut(1000);
       currentImage.removeClass('curry');

       if(nextImageIndex == ($('.img:last').index() + 1)) {
           $('.img').eq(0).fadeIn(ms);
           $('.img').eq(0).addClass('curry');
       } else {
           nextImage.fadeIn(ms);
           nextImage.addClass('curry');
       }
    });


    $('.prev').click(function() {
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(ms);
        currentImage.removeClass('curry');

        prevImage.fadeIn(ms);
        prevImage.addClass('curry');
    });

});