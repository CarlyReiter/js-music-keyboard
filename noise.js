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

const playKeys = () => {
  $('body').keydown(function(event) {
    if (event.keyCode === 65) {
      $('audio#a')[0].play();
      $("button.a").css("background-color", "white");
    }
    if (event.keyCode === 66) {
      $('audio#b')[0].play();
      $("button.b").css("background-color", "white");
    }
    if (event.keyCode === 67) {
      $('audio#c')[0].play();
      $("button.c").css("background-color", "white");
    }
    if (event.keyCode === 68) {
      $('audio#d')[0].play();
      $("button.d").css("background-color", "white");
    }
    if (event.keyCode === 69) {
      $('audio#e')[0].play();
      $("button.e").css("background-color", "white");
    }
    if (event.keyCode === 70) {
      $('audio#f')[0].play();
      $("button.f").css("background-color", "white");
    }
    if (event.keyCode === 71) {
      $('audio#g')[0].play();
      $("button.g").css("background-color", "white");
    }
  });
};

$(document).ready(function() {

  playButtons();
  playKeys();
  
});
