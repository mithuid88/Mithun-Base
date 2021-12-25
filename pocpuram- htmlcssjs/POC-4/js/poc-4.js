$("document").ready(function() {
    $(".clickbar").click(function() {
        $(this).toggleClass("change");
        $(".topnav").toggleClass("mobileactive");
    });
    $('a').click(function(e) {
        e.preventDefault();
    });
    $(".scroll_top").click(function() {
        $('html,body').animate({
                scrollTop: $(".main_block").offset().top
            },
            'slow');
    });
    $("li.active").click(function() {
        $(".hover_dropdown").css("display", "block");
    });

});


/*slick trainer*/


(function() {
    $('.our_trainer').slick({
        dots: false,
        arrows: true,
        speed: 300,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


})();



/*end of slick trainer*/

/*slick gallery*/

(function() {

    $('.gallery').slick({
        dots: false,
        arrows: true,
        speed: 300,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


})();

/*end of gallery slick*/