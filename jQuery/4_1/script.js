var $myDiv = $('<div id="my" class="page">Hello</div>').appendTo('body');


var $myDiv = $('<div>Hello</div>').attr({
    id: 'my',
    class: 'page'
}).appendTo('body');

var myDiv = document.createElement('div');
    myDiv.id = 'my';
    myDiv.className = 'page';
    myDiv.innerHTML = "Hello";
    document.body.appendChild(myDiv);

$('div').after('<hr/>');
$('<hr/>').insertBefore('div');
