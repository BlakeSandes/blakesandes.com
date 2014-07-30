var $;

$ = require('jquery');


//////Create an overlay with a large image for the gallery.//////

var $overlay = $('<div class="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//Add image to overlay.
$overlay.append($image);
//Add caption to overlay.
$overlay.append($caption);
//Add overlay to body.
$("body").append($overlay);

//Capture the click event on a link to an image.
$(".gallery a:not([href^='http'])").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.fadeIn();
})

//When overlay is clicked.
$overlay.click(function(){
  //Hide overlay.
  $overlay.hide();
});




