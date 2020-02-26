
$('.text1').hide();
$('.text2').hide();

$('.column1').on('mouseenter', () => {
    $('#e').hide();
    $('.text1').show();
}).on('mouseleave', () => {
    $('#e').show();
    $('.text1').hide();
});
$('#D').on('mouseenter', () => {
    $('#m').hide();
    $('.text2').show();
}).on('mouseleave', () => {
    $('#m').show();
    $('.text2').hide();
});
