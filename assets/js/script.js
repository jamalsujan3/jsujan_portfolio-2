// Aos Animanion
AOS.init();

// Slick Slider
$(document).ready(function(){
    $('.test-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.test-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });