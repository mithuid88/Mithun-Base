$(document).on('click', '.clickbar', function() {
    $(this).toggleClass("change");
    $(".topnav").toggleClass("mobileactive");
});


$(document).on('click', ' .portfolio-header .topnav a, .footer-links  a', function(e) {
    e.preventDefault();
});

$(document).on('click', '.carousel-control', function(e) {
    e.preventDefault();
    if ($(this).parent().hasClass("currentSlide")) {
        currentSlide(Number($(this).attr("data-value")));
    } else {
        plusSlides(Number($(this).attr("data-value")));
    }

});


$(document).on('click', '.img-overlay', function() {
    $("#myModal").css("display", "block")

});


$(document).on('click', '.close', function() {
    $("#myModal").css("display", "none")

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
    var dots = document.getElementsByClassName("demo");
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
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}