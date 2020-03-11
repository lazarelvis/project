
$('.clasaR').hide();
$('.clasaR1').hide();
$('#t2').hide();
$('#carousel').on('mouseenter',() => {
  $('#t2').fadeIn();
  $('#t1').hide();
}).on('mouseleave',() =>{
  $('#t1').fadeIn();
  $('#t2').hide();
});

window.addEventListener('scroll',() => {

    if (window.scrollY>=650 && window.scrollY<=1300)
    {
      $("#ursulet1").animate({
        top: "-20"
      },1000);
      $("#labutaS1").animate({
        top: "+80"
      },1000);
      $("#labutaD1").animate({
            top: "+80"
      },1000);
      $('.clasaR').fadeIn(1500);
    };
    if (window.scrollY>=1550 && window.scrollY<=2000)
    {
      $("#ursulet2").animate({
        top: "-30"},1000);
      $("#labutaS2").animate({
        top: "+60"},1000);
        $("#labutaD2").animate({
            top: "+60"},1000);
        $('.clasaR1').fadeIn(1500);
    };
  });