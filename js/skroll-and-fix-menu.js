let header = document.querySelector('.about-us__header');
console.log(header);

window.addEventListener('scroll', function() {
    if (pageYOffset > 30) {
    header.style.position = "fixed";
    header.style.background = "#55b7ff";
    header.style.width = "100%"; 
    // header.style.cssText = "max-width: 100%";
    // console.log('lggg')
    }
    if (pageYOffset < 90) {
        header.style.position = "absolute";
        header.style.background = "transparent";
    }
})

