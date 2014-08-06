var $;

$ = require('jquery');


//////Clicking through the photo galleries.

var galleryItems = $(".gallery li");
var gallery_items = [];

var gallery_int = 0;

var $overlay = $('<div class="overlayEven overlay"><span class="top"></span><span class="left"><</span><span class="right">></span><span class="close">x</span></div>');
var $overlayImage = $('<img>');
var $caption = $('<p class="caption"></p>');

galleryItems.each(function(node) {
  
  var node = $(this);
  var imageLink = $(node).children("a");
  var imageCaption = imageLink.siblings("p").html();
  var imageContext = gallery_int;

  gallery_items.push( {
    imageURL: imageLink.attr("href"),
    caption: imageCaption,
    offsetTop: $(node).offset().top
    }
  );

  // console.log(gallery_items);

  imageLink.on("click", function (event) {
    event.preventDefault();
    console.log(gallery_items);
    
    //Set the image in the $overlay div to be from the gallery image src.
    $overlayImage.attr("src", gallery_items[imageContext].imageURL);
    $overlay.append($overlayImage);
    $overlay.append($caption.html(gallery_items[imageContext].caption));

    //Append $overlayEven to its relative image in the gallery.
    $(this).closest("li").append($overlay).siblings().find($overlay).fadeOut("");

    //Fade in the $overlayEven div.
    $overlay.fadeIn(100);
  });

  gallery_int = gallery_int + 1;
     
});


$overlay.on("click", ".close", function(){
  //Hide overlay.
  $(this).closest("div").fadeOut();
});
// console.log(gallery_items);

















