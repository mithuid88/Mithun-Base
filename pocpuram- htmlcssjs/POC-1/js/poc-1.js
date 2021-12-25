$("document").ready(function(){
$(".clickbar").click(function(){
$(this).toggleClass("change");
$(".topnav").toggleClass("active");
});
$('a').click(function(e) {
e.preventDefault();
});
});