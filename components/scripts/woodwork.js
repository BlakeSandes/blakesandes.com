var $;

$ = require('jquery');


//////Create an overlay with a large image for the gallery.//////

var $overlayEven = $('<div class="overlayEven overlay"><span class="top"></span><span class="left"><</span><span class="right">></span><span class="close">x</span></div>');
var $overlayOdd = $('<div class="overlayOdd overlay"><span class="top"></span><span class="left"><</span><span class="right">></span><span class="close">x</span></div>');
var $overlayImageEven = $('<img>');
var $overlayImageOdd = $('<img>');

//Capture the click event on a link to an image in the even(left side) row.

$(".gallery li:even" ).on( "click", "a:not([href^='http'])", function(event) {
  event.preventDefault();
  var $imageLocationEven = $(this).attr("href");
  var $captionEven = $('<span class="caption"><p>Hey Even!</p></span>');


  //Set the image in the $overlay div to be from the gallery image src.
  $overlayImageEven.attr("src", $imageLocationEven);
  $overlayEven.append($overlayImageEven);
  $overlayEven.append($captionEven);

  //Append $overlayEven to its relative image in the gallery.
  $(this).closest("li").append($overlayEven).siblings().find($overlayEven).fadeOut("slow");

  //Fade in the $overlayEven div.
  $overlayEven.fadeIn(100);

});


//Capture the click event on a link to an image in the even(left side) row.
$(".gallery li:odd").on("click", "a:not([href^='http'])", function(event) {
  event.preventDefault();
  var $imageLocationOdd = $(this).attr("href");
  
  var $captionOdd = $('<span class="caption"><p>Hey Odd!</p></span>');

  
//Set the image in the $overlay div to be from the gallery image src.
  $overlayImageOdd.attr("src", $imageLocationOdd);
  $overlayOdd.append($overlayImageOdd);
  $overlayOdd.append($captionOdd);

     //Append $overlayOdd to its relative image in the gallery.
  $(this).closest("li").append($overlayOdd).siblings().find($overlayOdd).fadeOut("slow");

  //Fade in the $overlayOdd div.
  $overlayOdd.fadeIn(100);

});

   
//Closing the overlays.

$overlayEven.on("click", ".close", function(){
  //Hide overlay.
  $(this).closest("div").fadeOut();
});

$overlayOdd.on("click", ".close", function(){
  //Hide overlay.
  $(this).closest("div").fadeOut();
});



//////Clicking through the photo galleries.

var gallery1 = ["../images/gallery-1/1_1.jpg", "../images/gallery-1/1_2.jpg", "../images/gallery-1/luka_bed.jpg"];














