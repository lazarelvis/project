

// let animation = anime({
//   targets: '#arm',
//   rotate: [-150, -80],
//   duration: 1000,
//   easing: 'easeInOutSine',
//   direction: 'alternate',
//   loop: true,
//   autoplay: false,
// });

//    document.querySelector('.play').onclick = animation.play;
//    document.querySelector('.pause').onclick = animation.pause; //onclick event
//     //onclick event


var tl = anime.timeline({
  easing: 'easeInOutSine',
  duration: 200,
  direction: 'alternate',
  autoplay: false

});
var tl1 = anime.timeline({
  easing: 'easeInOutSine',
  duration: 200,
  direction: 'alternate',
  autoplay: false

});

// Add children
tl
.add({
  targets: '#forearm',
  rotate: [-170, -130],

  loop: true
});
tl1
.add({
  targets: '#forearm',
  rotate: [-170, -220],

  loop: true
});

 document.querySelector('#next').onclick = tl.play;
 document.querySelector('#prev').onclick = tl1.play;
