window.onload = function() {
    var block = document.querySelector("#block");
    var input = document.querySelectorAll("input");
    var p = document.querySelectorAll("p");

    input[0].onmousemove = function() {
        p[0].innerHTML = this.value + 'px';
        block.style.borderTopLeftRadius = this.value + 'px';
    };

    input[1].onmousemove = function() {
        p[1].innerHTML = this.value + 'px';
        block.style.borderTopRightRadius = this.value + 'px';
    };

    input[2].onmousemove = function() {
        p[2].innerHTML = this.value + 'px';
        block.style.borderBottomLeftRadius = this.value + 'px';
    };

    input[3].onmousemove = function() {
        p[3].innerHTML = this.value + 'px';
        block.style.borderBottomRightRadius = this.value + 'px';
    };
};