function smoothScroll(target, duration) {
    var targetSelector = document.querySelector(target);
    var targetPosition = targetSelector.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;


    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }


    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }


    requestAnimationFrame(animation);


    /* console.log('targetSelector: ' + targetSelector);
    console.log('targetPosition: ' + targetPosition);
    console.log('startPosition: ' + startPosition);
    console.log('distance: ' + distance);
    console.log('targetSelector: ' + targetSelector);
    console.log('startTime: ' + startTime); */
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');


section1.addEventListener('click', function() {
    smoothScroll('.section2', 1400);
});
section2.addEventListener('click', function() {
    smoothScroll('.section1', 1400);
});