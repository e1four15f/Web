$('.first').replaceWith('<h2>New Text</h2>');
//$('<h2>New Text</h2>').replaceAll('.inner');

$('.inner').wrap('<div class=new>Text</div>');
//$('.inner').wrapAll('<div class=new>Text</div>');
//$('.inner').wrapInner('<div class=new>Text</div>');

$('.second').clone().appendTo('.third');

var p;
$('button').click(function() {
    if(p) {
        p.prependTo('.block');
        p = null;
    } else {
        p = $('#text').detach();
    }
});

/*
$('.second').empty();
$('.second').remove();
*/