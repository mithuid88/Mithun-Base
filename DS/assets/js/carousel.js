// carousel and its variations

$(document).ready(function () {


    $(".gds-carousel.thirty-seventy-carousel .gds-carousel-parent ,.gds-carousel.full-width-carousel .gds-carousel-parent ,.gds-carousel.fifty-fifty-carousel .gds-carousel-parent ,.gds-carousel.media-carousel .gds-carousel-parent").slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },


            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                },
            },
        ],
    });




    $(".gds-carousel.keyfacts-carousel .gds-carousel-parent ").not('.slick-initialized').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        focusOnSelect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><span>Previous</span></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><span>Next</span></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                },
            },


            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,


                },
            },
        ],
    });

    $(".gds-carousel.cards-carousel .gds-carousel-parent").not('.slick-initialized').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><span>Previous</span></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><span>Next</span></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                },
            },


            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,


                },
            },
        ],
    });


    function onOrientationChange() {

        if ($(".gds-carousel").length) {
            if (window.innerHeight > window.innerWidth) {
                $('.gds-carousel .gds-carousel-parent').slick('refresh');
                console.log("Portrait mode");
            } else {
                $('.gds-carousel .gds-carousel-parent').slick('refresh');
                console.log("Landscape mode");
            }
        }


    }

    $(window).on('resize orientationchange', function () {
        onOrientationChange();
    });

    onOrientationChange();

    // media banner carousel

    $(".media-banner-carousel .gds-media-banner").slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },


            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                },
            },
        ],
    });


});
