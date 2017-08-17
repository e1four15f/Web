window.onload = function () {
    var clock = document.querySelector('.clock');
    setInterval(function() {
        var time = new Date();
        clock.innerHTML = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
    }, 1000);
};