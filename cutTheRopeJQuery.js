$('.rope1').hide();
$('.rope2').hide();

$('.cutTheRope').on('mouseenter', () => {
    $('.rope').hide();
    $('.rope1').show();
    $('.rope2').hide();

  }).on('mouseleave', () => {
    $('.rope1').hide();
    $('.rope').show();
    $('.rope2').hide();

  });
  $( ".rope1" ).click(function() {
    $( ".rope" ).hide();
    $( ".rope1" ).hide();
$( ".rope2" ).show();
})