
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove' , function (e){
    /* console.log(e); */
    c2Cursor = getComputedStyle(cursor);
    var cWidth = c2Cursor.width;
    var pxCursor = cWidth.slice(0,6);
    pxCursor = Math.round(pxCursor);
    console.log(cursor.setAttribute("style", "top: " + (e.pageY - (pxCursor/2)) + "px; left: " + (e.pageX -(pxCursor/2)) + "px"));
    /* var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px"; */
});



var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var vc1 = document.getElementById('vc1');
var vc2 = document.getElementById('vc2');
/* var main_text = document.querySelectorAll('.main-text'); */

v1.addEventListener('click', function() {
    if (v1.classList.contains('flex90')) {
        return;
    } else {
        if (v1.classList.contains('flex15')) v1.classList.toggle('flex15');
        v2.classList.toggle('flex90');
        v1.classList.toggle('flex90');

    }
    /* videoContent.classList.toggle('displayNoneToggle'); */
});
v2.addEventListener('click', function() {
    if (v2.classList.contains('flex90')) {
        return;
    } else {
        if (v2.classList.contains('flex15')) v2.classList.toggle('flex15');
        v1.classList.toggle('flex90');
        v2.classList.toggle('flex90');
    }
    /* videoContent.classList.toggle('displayNoneToggle'); */
});


v1.addEventListener('mouseenter', function () {
    if (v2.classList.contains('flex90') ) v1.classList.toggle('flex15');
});
v1.addEventListener('mouseleave', function () {
    if (v2.classList.contains('flex90') ) v1.classList.toggle('flex15');
});
v2.addEventListener('mouseenter', function () {
    if (v1.classList.contains('flex90') ) v2.classList.toggle('flex15');
});
v2.addEventListener('mouseleave', function () {
    if (v1.classList.contains('flex90') ) v2.classList.toggle('flex15');
});


/* Cambio de color del mouse circular */
var btnHero = document.querySelector('.btnHero');
btnHero.addEventListener('mouseenter', function () {
    cursor.classList.toggle('cursorHover1');
    cursor.classList.toggle('cursorHover2');
});
btnHero.addEventListener('mouseleave', function () {
    cursor.classList.toggle('cursorHover1');
    cursor.classList.toggle('cursorHover2');
});


