var $;

$ = require('jquery');


//////Create an overlay with a large image for the gallery.//////


// var $caption = $("<p></p>");
//Add image to overlay.
// $overlay.append($image);
//Add caption to overlay.
// $overlay.append($caption);
//Add overlay to body.
// $("body").append($overlay);

//Capture the click event on a link to an image.
$(".gallery li:even" ).on( "click", "a:not([href^='http'])", function(event) {
  event.preventDefault();
  var $imageLocationEven = $(this).attr("href");
  var $overlayImageEven = $('<img>');
  var $overlayEven = $('<div class="overlayEven overlay"></div>');

  $overlayImageEven.attr("src", $imageLocationEven);
  $overlayEven.append($overlayImageEven);

  //Append $overlayEven to its relative image in the gallery.
  $(this).closest("li").append($overlayEven);

  //Fade in the $overlayEven div.
  $overlayEven.fadeIn(100);

});

$(".gallery li:odd").on("click", "a:not([href^='http'])", function(event) {
  event.preventDefault();
  var $imageLocationOdd = $(this).attr("href");
  var $overlayImageOdd = $('<img>');
  var $overlayOdd = $('<div class="overlayOdd overlay"></div>');


  $overlayImageOdd.attr("src", $imageLocationOdd);
  $overlayOdd.append($overlayImageOdd);

   //Append $overlayOdd to its relative image in the gallery.
  $(this).closest("li").append($overlayOdd);

  //Fade in the $overlayOdd div.
  $overlayOdd.fadeIn(100);

});

  //Get the image and assign to a variable.
  
  //Set the image in the $overlay div to be from the gallery image src.
  

  

  
  

//When overlay is clicked.
/*$("body:not('.overlay')").click(function(){
  //Hide overlay.
  $overlay.hide();
});*/




