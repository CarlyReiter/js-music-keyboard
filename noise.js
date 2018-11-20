const playButtons = () => {
  $('.instrument').on('click', 'button', (function (event) {
    const note = $(this).html();
    // console.log(`You clicked on the ${note} button.`);
    // console.log ($(this));
    // console.log ($(`audio#${note}`));
    const audionote = ($(`audio#${note}`));
    $(audionote)[0].play();
  }),
)};

$(document).ready(function() {

playButtons();

  $('body').keydown(function(event) {
    if (event.keyCode === 65) {
      $('audio#a')[0].play();
    }
    if (event.keyCode === 66) {
      $('audio#b')[0].play();
    }
    if (event.keyCode === 67) {
      $('audio#c')[0].play();
    }
    if (event.keyCode === 68) {
      $('audio#d')[0].play();
    }
    if (event.keyCode === 69) {
      $('audio#e')[0].play();
    }
    if (event.keyCode === 70) {
      $('audio#f')[0].play();
    }
    if (event.keyCode === 71) {
      $('audio#g')[0].play();
    }
  });
});
