$(function() {
   $('.block').slice(0, 4).show();
   $('#load-more').on('click', function(e) {
       e.preventDefault();
       $('.block:hidden').slice(0, 4).slideDown();
       if($('.block:last-of-type').css('display') == 'block') {
           $('#load-more').hide();
       }
   });
});