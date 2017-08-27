$('.box').css({
    color: 'green',
    fontSize: '12px',
    marginLeft: '50px'
});

$('#content').css('font-size', function (i, value) {
    return parseFloat(value)*1.2;
});

$('#footer').addClass('name');
$('#footer').removeClass('boxer');
//$('#footer').hasClass();
//$('#footer').toggle();

//attr(attrName);
//attr(attrName, attrValue);
//removeAttr(attrName);

var altText = $('img').attr('alt');
console.log(altText);
$('img').attr('src', 'default.jpg');

$('a').attr({
    href: 'https://fonts.google.com/',
    title: 'Google Fonts'
});
