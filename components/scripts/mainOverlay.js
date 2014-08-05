var $;

$ = require('jquery');


//////Create an overlay with a large image for the gallery.//////
var $captionEven = $("<p>What's up Even!</p>");


//Capture the click event on a link to an image in the even(left side) row.

$(".gallery li:even" ).on( "click", "a:not([href^='http'])", function(event) {
  event.preventDefault();
  var $imageLocationEven = $(this).attr("href");
  var $overlayImageEven = $('<img>');
  var $overlayEven = $('<div class="overlayEven overlay"></div>');
      $captionEven = $("<p>What's up Even!</p>");

  //Set the image in the $overlay div to be from the gallery image src.
  $overlayImageEven.attr("src", $imageLocationEven);
  $overlayEven.append($overlayImageEven);
  $overlayEven.append($captionEven);

  //Append $overlayEven to its relative image in the gallery.
  $(this).closest("li").append($overlayEven);

  //Fade in the $overlayEven div.
  $overlayEven.fadeIn(100);

});


//Capture the click event on a link to an image in the even(left side) row.

$(".gallery li:odd").on("click", "a:not([href^='http'])", function(event) {
  event.preventDefault();
  var $imageLocationOdd = $(this).attr("href");
  var $overlayImageOdd = $('<img>');
  var $overlayOdd = $('<div class="overlayOdd overlay"></div>');
  var $captionOdd = ("<p>What's up Odd!</p>");

//Set the image in the $overlay div to be from the gallery image src.
  $overlayImageOdd.attr("src", $imageLocationOdd);
  $overlayOdd.append($overlayImageOdd);
  $overlayOdd.append($captionOdd);

   //Append $overlayOdd to its relative image in the gallery.
  $(this).closest("li").append($overlayOdd);

  //Fade in the $overlayOdd div.
  $overlayOdd.fadeIn(100);

});

   
//Closing the overlay.

$overlayOdd.click(function(){
  //Hide overlay.
  $(this).hide();
  console.log("Hey");
});




