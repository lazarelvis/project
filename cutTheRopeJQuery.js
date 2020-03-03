$(document).ready(function(){
  $(".buttonRotund").click(function(){
    $("#panel").slideToggle("slow");
  });
});

$('.rope1').hide();
$('.rope2').hide();
$('.srope1').hide();
$('.srope2').hide();
$('.feed').hide();


$('.cutTheRope').on('mouseenter', () => {
    $('.rope').hide();
    $('.rope1').show();
    $('.rope2').hide();

  }).on('mouseleave', () => {
    $('.rope1').hide();
    $('.rope').show();
    $('.rope2').hide();
    $('.feed').hide(1000);

  });
  $( ".rope1" ).click(function() {
    $( ".rope" ).hide();
    $( ".rope1" ).hide();
    $( ".rope2" ).show();
    $( ".feed" ).show();
  });


  $('.cutTheRope1').on('mouseenter', () => {
    $('.srope').hide();
    $('.srope1').show();
    $('.srope2').hide();

  }).on('mouseleave', () => {
    $('.srope1').hide();
    $('.srope').show();
    $('.srope2').hide();
  });
  $( ".srope1" ).click(function() {
    $( ".srope" ).hide();
    $( ".srope1" ).hide();
    $( ".srope2" ).show();
  });