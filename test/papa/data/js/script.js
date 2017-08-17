var text = document.querySelector('#text');
var p = document.querySelector('p');
var h1 = document.querySelector('h1');
var body = document.querySelector('body');
var flex = document.querySelector('.flex');
var video = document.querySelector('video');

var count = 0;

text.onclick = function() {
  if(count < 49) {
    var color = 'rgb('+count*15+', '+count*5+', '+count*10+')';
    text.style.background = color;
    p.style.fontSize = 15+count+'px';
  } else {
    text.style.background = 'red';
  }
  p.innerHTML = count;
  count++;

  if(count == 5)
    h1.innerHTML = 'Ну я же говорил не нажимать!';
  else if(count == 8)
    h1.innerHTML = 'Эй, ну серьезно!!';
  else if(count == 10)
    h1.innerHTML = 'Мда... Ты кто вообще?';
  else if(count == 14)
    h1.innerHTML = 'Хотя можешь не отвечать, я знаю...';
  else if(count == 18)
    h1.innerHTML = 'Я еще давно говорил, что это навечно.';
  else if(count == 23)
    h1.innerHTML = 'Но ты по прежнему уверен, что я не причиню тебе вреда! ...';
  else if(count == 27)
    h1.innerHTML = 'Но помни, что я говорил тебе про нашу взаимосвязь!';
  else if(count == 30)
    h1.innerHTML = 'Если не нажать, то всё, жопа.';
  else if(count == 35)
    h1.innerHTML = 'Видимо, забыл на какую кнопку дальше нажимать.';
  else if(count == 38)
    h1.innerHTML = 'На кнопки нажимать?';
  else if(count == 42)
    h1.innerHTML = 'Ну ладно хватит!';
  else if(count == 50)
    h1.innerHTML = 'Ты меня уже бесишь!!!';
  else if(count == 53)
    h1.innerHTML = 'Ты чё урод, драки хочешь??!';
  else if(count == 57)
    h1.innerHTML = 'Ну, всё! Тобi пiзда!';
  else if(count == 60)
    h1.innerHTML = 'Последнее предупреждение!';
  else if(count == 65)
    h1.innerHTML = 'Ну всё даун! Готовь свою сраку, сейчас драть будем!!!';

  if(count > 69) {
    flex.removeChild(p);
    flex.removeChild(h1);
    flex.removeChild(text);
    body.style.background = '#000';
    video.setAttribute('autoplay', '');
    video.setAttribute('src', 'data/papa.mp4');
  }
}
