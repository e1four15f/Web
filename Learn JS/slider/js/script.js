var img = document.querySelectorAll('.slider img');
var next = document.querySelector('#next');
var back = document.querySelector('#back');

var i = 0;

next.onclick = function() {
  img[i].className = '';
  i++;
  if(i >= img.length) {
    i = 0;
  }
  img[i].className = 'showed'
}
