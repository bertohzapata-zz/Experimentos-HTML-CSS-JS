
var a = document.querySelector('a');
console.log(a);


a.addEventListener('click', () => {
    console.log('Hola');
    
    TweenMax.to('.page', 0, {
        width: "0%",
        left: '0%',
        display: 'block'
    });
    TweenMax.staggerTo('.page', 0.8, {
        width: "100%",
        delay: 0.2
    }, 0.1);
    TweenMax.to('.page_p1, .page_p2', 0, {
        display: "none",
        delay: 1.3
    });
    TweenMax.to('.page_p3', 0.8, {
        left: '100%',
        delay: 1.3,
    });
    TweenMax.to('.page', 0, {
        width: "0%",
        left: '0%',
        display: 'block',
        delay: 2.2
    });
});

