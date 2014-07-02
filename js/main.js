//JQuery for Gallery.

//Create an overlay with a large image.
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//Add image to overlay.
$overlay.append($image);
//Add caption to overlay.
$overlay.append($caption);
//Add overlay to body.
$("body").append($overlay);

//Capture the click event on a link to an image.
$("#gallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
})

//When overlay is clicked.
$overlay.click(function(){
  //Hide overlay.
  $overlay.hide();
});


//JQuery for Blog.

$('#blog-head').click(function() {
  $(this).closest().find('#blog-post').slideToggle('slow');
});

$('#blog-base').click(function() {
  $(this).prev().slideUp('slow');
});