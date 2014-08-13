var $;

$ = require('jquery');


//////Clicking through the photo galleries.

var galleryItems = $(".gallery ul li");
var gallery_item = [];
var gallery_index = 0;


var $lightBox = $('<div class="lightBox"></div>');
var $imgBox = $('<div class="imgBox"><span class="left"><</span><span class="right">></span><span class="close">x</span></div')
var $lightBoxImage = $('<img>');
var $caption = $('<p class="caption"></p>');

galleryItems.each(function(node) {
  var node = $(this);
   // var parentListItem = $(node).children("li");
  var imageLink = node.find('img');
  var imageCaption = imageLink.siblings("p").html();
  var currentIndex = gallery_index;
  
  gallery_item.push( {
    imageURL: imageLink.attr("src"),
    caption: imageCaption,
    offsetTop: $(node).offset().top
    }
  );

  function createLightBox() {
    $lightBoxImage.attr("src", gallery_item[currentIndex].imageURL);
    $lightBox.append($imgBox);
    $imgBox.append($lightBoxImage);
    $lightBox.append($caption.html(gallery_item[currentIndex].caption)); 
  }
    
  imageLink.on("click", function (event) {
    event.preventDefault();
    var image = $(this);
    var imageFamily = image.closest("ul").find("li");
    imageFamily.last().css("border", "3px solid red").parent("ul").siblings().find(imageFamily).css("border", "none");
    console.log("ul length is " +imageFamily.length);

    //Set the image in the $lightBox div to be from the gallery image src.    
    createLightBox();

    //Append lightbox to its relative image in the gallery.
    image.closest("ul").append($lightBox).siblings().find($lightBox).fadeOut("slow");
    //Fade in the $lightBoxEven div.
    $lightBox.fadeIn(100);
    console.log("The parent ul index is " +currentIndex+ " and it has " +imageFamily.length+ " list items in it.");
    
    $lightBox.on("click", ".right", function(event) {
        event.preventDefault();
        
      // if (currentIndex < imageFamily.length) {
        createLightBox();
        
        image.closest("ul").append($lightBox).siblings().find($lightBox).fadeOut("slow");
        
        $lightBox.fadeIn(100);
        
        console.log("currentImage is " +currentIndex+ " Parent  is: " +imageFamily.length );
        
        currentIndex++
      // } else {
      //   currentImageInt = imageFamily.length - imageFamily.length;
      // }
    });


    $lightBox.on("click", ".left", function(event) {
      event.preventDefault();

      createLightBox();
      
      image.closest("ul").append($lightBox).siblings().find($lightBox).fadeOut("slow");
      
      $lightBox.fadeIn(100);
      
      console.log("currentImage is " +currentIndex+ " Parent length is: " +imageFamily.length );
      
      currentIndex--
    });

    $lightBox.on("click", ".close", function(){
      //Hide lightBox.
      $(this).closest($lightBox).fadeOut();
    });

  });
  



  gallery_index++;  
  console.log("gallery_index: " + gallery_index);

});



















