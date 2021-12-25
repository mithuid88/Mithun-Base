$("document").ready(function() {
    $(".clickbar").click(function() {
        $(this).toggleClass("change");
        $(".topnav").toggleClass("mobileactive");
    });
    $('a').click(function(e) {
        e.preventDefault();
    });
});


