$('.news-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    responsive: [{

        breakpoint: 1200,
        settings: {
        slidesToShow: 2,
        infinite: true
        }

        }, {

        breakpoint: 720,
        settings: {
        slidesToShow: 1,
        dots: true
        }

        }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

        }]
});
$('.slick-prev').append('<i class="fas fa-chevron-left"></i>');
$('.slick-next').append('<i class="fas fa-chevron-right"></i>');

$('.slider').slick({
    dots: true,
    arrows: false,
});
$('.slider .slick-dots').addClass('slider__dots');