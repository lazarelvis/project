function AnimateRotate(d,y){
    $({deg: 0}).animate({deg: d },
         {duration:500,
        step: function(now, fx){
            $("#i"+y+"").css({
                 transform: "rotate(" + now + "deg)"
                 

            });
        }
    });
}
$('#i1').on('mouseenter',() => {
    AnimateRotate(360,1,);
});
$('#i2').on('mouseenter',() => {
    AnimateRotate(360,2);
});
$('#i3').on('mouseenter',() => {
    AnimateRotate(360,3);
});
$('#i4').on('mouseenter',() => {
    AnimateRotate(360,4);
});
$('#i5').on('mouseenter',() => {
    AnimateRotate(360,5);
});
$('#i6').on('mouseenter',() => {
    AnimateRotate(360,6);
});
$('#i7').on('mouseenter',() => {
    AnimateRotate(360,7);
});
$('#i8').on('mouseenter',() => {
    AnimateRotate(360,8);
});
$('#i9').on('mouseenter',() => {
    AnimateRotate(360,9);
});
$('#i10').on('mouseenter',() => {
    AnimateRotate(360,10);
});
$('#i11').on('mouseenter',() => {
    AnimateRotate(360,11);
});
$('#i12').on('mouseenter',() => {
    AnimateRotate(360,12);
});
$('#i13').on('mouseenter',() => {
    AnimateRotate(360,13);
});

