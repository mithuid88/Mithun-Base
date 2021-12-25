$(window).on("load resize scroll", function(e) {
    if ($(this).scrollTop() > 50) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }

    if ($(this).scrollTop() > 500) {
        $('.social-icon-bar').fadeIn();

    } else {
        $('.social-icon-bar').fadeOut();
    }
});


$(document).on('click', '.clickbar', function() {
    $(this).toggleClass("change");
    $(".topnav").toggleClass("mobileactive");
});

$(document).on('click', '.firstlink a, .about a, .project-button', function(e) {
    e.preventDefault();
});

$(document).on('click', '.search-icon', function() {
    $(".search-box").slideToggle();
});

$(document).on('click', '.close-icon', function() {
    $(".search-box").slideToggle();
});

$(document).on('click', '.scroll-top', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(document).on('click', '.carousel-control', function(e) {
    e.preventDefault();
    if ($(this).parent().hasClass("currentSlide")) {
        currentSlide(Number($(this).attr("data-value")));
    } else {
        plusSlides(Number($(this).attr("data-value")));
    }

});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}



(function() {
    getData("all");
    $(document).on('click', '.tabs li a', function(e) {
        e.preventDefault();
        var tabs_id = $(this).data('pill');
        getData(tabs_id);
        $('.tab-Section  .tabs li').removeClass('tabactive');
        $('.tab-boxes .box-child').removeClass('tabactive');
        $(this).closest('li').addClass('tabactive');

    });

    function getData(tabs_id) {
        $.ajax({
            type: "GET",
            url: "js/poc-2.json",
            dataType: "json",
            cache: false,
            success: function(data) {
                var result = '';
                $.each(data, function(k, val) {
                    if (val.type == tabs_id) {
                        $.each(val.title, function(key, value) {
                            result += '<div class="box-child ' + value.id + '"><div class="text">awesome work<br><span>&#47;' + value.id + '</span></div></div>';
                        });
                    } else if (tabs_id == "all") {
                        $.each(val.title, function(key, value) {
                            result += '<div class="box-child ' + value.id + '"><div class="text">awesome work<br><span>&#47;' + value.id + '</span></div></div>';
                        });
                    }
                });
                $('.tab-boxes').html(result);
            },
            error: function(msg) {
                alert("JSON failed to load");
            }
        });

    }

})();