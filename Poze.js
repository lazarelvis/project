
$('.text1').hide();
$('.text2').hide();

$('.column1').click(function() {
    $('#e').fadeOut(500);
    $('.text1').show('slow');
    
}).on('mouseleave', () => {
    $('#e').show();
    $('.text1').hide();
});
$('.column2').click(function() {
    $('#m').fadeOut(500);
    $('.text2').show('slow');
}).on('mouseleave', () => {
    $('#m').show();
    $('.text2').hide();
});


// aparitie mesaj trimis

$('.sentMsj').hide();
$('.butontrimite1').click(function() {
    $('.sentMsj').slideDown("slow");
    // $('.sentMsj').delay(1200).hide(500);
    $('.sentMsj').delay(1200).fadeOut(400);
    // $('.sentMsj').animate({right: '-450px',loop:'true'}).hide('slow');
  });

//   aparitie urs shazam

$("#ursulet").fadeIn(900);
$("#labutaS").fadeIn(900);
$("#labutaD").fadeIn(900);



