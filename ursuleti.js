


window.addEventListener('scroll',() => {

    if (window.scrollY>=650 && window.scrollY<=1300)
    {
      $("#ursulet1").animate({
        top: "-20"},1000);
      $("#labutaS1").animate({
        top: "+80"},1000);
        $("#labutaD1").animate({
            top: "+80"},1000);
    };
    if (window.scrollY>=1550 && window.scrollY<=2000)
    {
      $("#ursulet2").animate({
        top: "-30"},1000);
      $("#labutaS2").animate({
        top: "+60"},1000);
        $("#labutaD2").animate({
            top: "+60"},1000);
    };
  });