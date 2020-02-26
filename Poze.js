
$('.text1').hide();
$('.text2').hide();

$('.column1').on('mouseenter', () => {
    $('#e').hide(200);
    $('.text1').show('slow');
    
}).on('mouseleave', () => {
    $('#e').show();
    $('.text1').hide();
});
$('.column2').on('mouseenter', () => {
    $('#m').hide(500);
    $('.text2').show(500);
}).on('mouseleave', () => {
    $('#m').show();
    $('.text2').hide();
});
