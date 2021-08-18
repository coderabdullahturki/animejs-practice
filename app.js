
// anime({
//     targets: '.box.two',
//     translateY: [
//         {value: 500, duration: 1500},
//         {value: 0, duration: 1000}
//     ],
//     rotate: [
//         {value: '2turn', easing: 'easeInOutSine'},
//         {value: '2turn', easing: 'easeInOutSine'},
//     ],
//     delay: 2000,
// });

const animation = anime({
    targets: '.box',
    translateY: [
        {value: 500, duration: 1500 },
        {value: 0, duration: 1000}
    ],
    rotate: [
        {value: '2turn', easing: 'easeInOutSine'},
        {value: '2turn', easing: 'easeInOutSine'},
    ],
    autoplay: 0,
    // loop: true,
    delay: function(el, i, l) {
        return i * 100;
      },
});

const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

playBtn.onclick = animation.play;
pauseBtn.onclick = animation.pause;