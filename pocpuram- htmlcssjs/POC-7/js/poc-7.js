$(document).on('click', '.clickbar', function(e) {
    $(this).toggleClass("change");
    $(".topnav").toggleClass("mobileactive");
});


$(document).on('click', '.carousel-control', function(e) {
    e.preventDefault();
    plusSlides(Number($(this).attr("data-value")));

});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";

}