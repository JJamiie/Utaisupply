$('#stainless').click(function(){
    $('.modal-stainless').addClass('is-active');
});

$('#zinc').click(function(){
    $('.modal-zinc').addClass('is-active');
});

$('#steel').click(function(){
    $('.modal-steel').addClass('is-active');
});

$('.modal-delete').click(function(){
  $('.modal').removeClass('is-active');
});

$('.modal-background').click(function(){
  $('.modal').removeClass('is-active');
});

$(document).ready(function() {
  $('.parallax').parallax();
});
