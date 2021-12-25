$(document).on('click', '.clickbar', function() {
    $(this).toggleClass("change");
    $(".topnav").toggleClass("mobileactive");
});

$(document).on('click', ' .date-picker a, .headernav li a, .tools-box .tabs a, .icons-set a', function() {
    e.preventDefault();

});

$(document).on('click', '.headernav .power-icon a', function() {
    $(this).toggleClass("poweron");
});

$(document).on('click', '.header-search', function() {
    $(".search-box").slideToggle();
});

$(document).on('click', '.search-box .close-icon', function() {
    $(".search-box").slideToggle();
});

$(document).on('click', 'ul.tabs li', function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');

});


(function() {
    $('.carousel-parent').slick({
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


$(function() {
    $('#inlineDatepicker').datepick({
        onSelect: showDate
    });
});

function showDate(date) {}

$(document).on('click', '.carousel-control', function(e) {
    e.preventDefault();
    $(".mySlides img").attr("src", $(this).find("img.demo").attr("src"))
    $(".slide-num").html((Number($(this).attr("data-value"))));

});


$(document).on('click', '.overlay-image .btn', function() {
    $(".modal-link").css("display", "block");
    $(".carousel-container").slick("refresh");

});


$(document).on('click', '.close', function() {
    $(".modal-link").css("display", "none");

});


(function() {
    $('.carousel-container').slick({
        dots: false,
        arrows: true,
        speed: 300,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    });


})();


function progress(index) {
    var prg = $('.progress')[index];
    var percent = $('.percent-count')[index];
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 50);

    function frame() {
        if (progress == 500 && counter == 100) {
            clearInterval(id);
        } else {
            progress += 5;
            counter += 1;
            prg.style.width = (progress / 5) + '%';
            percent.innerHTML = counter + '%';
        }
    }
}



$(document).ready(function() {
    var slidenum = $(".carousel-container .slick-slide").length;
    $(".slide-total").append(slidenum);
    $(".slide-num").append("1");

    for (var i = 0; i < $(".progress").length; i++) {
        progress(i);
    }
    $(".topnav li").hover(function() {
        $(this).css("background-color", "#cd950b");
        $(".topnav li a").css("color", "#fffefe");
        $(this).children("ul").slideDown('slow');
        $(".dropnav,.submenu").css("background-color", "#cd950b");
        $(".dropnav li a,.submenu li a").css("color", "#fffefe");
    }, function() {
        $(this).css("background-color", "#f1c40f");
        $(".topnav li a").css("color", "#252222");
        $(this).children("ul").slideUp('slow');
        $(".dropnav li,.submenu li").css("background-color", "#cd950b");
        $(".dropnav li a,.submenu li a").css("color", "#fffefe");

    });
});