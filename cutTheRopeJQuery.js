$('.rope1').hide();
$('.cutTheRope').on('mouseenter', () => {
    $('.rope').hide();
    $('.rope1').show();
  }).on('mouseleave', () => {
    $('.rope').hide();
  });