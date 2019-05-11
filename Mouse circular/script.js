
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove' , e => {
    /* console.log(e); */
    cursor.setAttribute("style", "top: " + (e.pageY -8) + "px; left: " + (e.pageX -8) + "px");
    /* var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px"; */
});