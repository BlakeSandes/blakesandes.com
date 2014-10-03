var $;

$ = require('jquery');

// One of my previous unseccessful attemps.

// var imageParentTwoLI = $(".imageParent2 li");
// var gallery_item = [];
// var gallery_index = 0;


// var $lightBox = $('<div class="lightBox"></div>');
// var $imgBox = $('<div class="imgBox"><span class="previous"><</span><span class="next">></span><span class="close">x</span></div')
// var $lightBoxImage = $('<img>');
// var $caption = $('<p class="caption"></p>');

// imageParentTwoLI.each(function() {
//   var node = $(this);
//   // var imageListItems = node.children("li");
//   var imageLink = node.find('img');
//   var imageCaption = imageLink.siblings("p").html();
  
//   var currentIndex = gallery_index;
//   var $append = node.closest("ul").append($lightBox).siblings().find($lightBox).fadeOut("slow");


//   gallery_item.push( {
//     imageURL: imageLink.attr("src"),
//     caption: imageCaption,
//     offsetTop: $(node).offset().top
//     }
//   );

//   function createLightBox() {
//     $lightBoxImage.attr("src", gallery_item[currentIndex].imageURL);
//     $lightBox.append($imgBox);
//     $imgBox.append($lightBoxImage);
//     $lightBox.append($caption.html(gallery_item[currentIndex].caption)); 
//   }
  
//   function next() {
//     $append;
//     $lightBox.fadeIn(100);
//     currentIndex++  
//   }
//   function previous() {
//     $append;
//     $lightBox.fadeIn(100);
//     currentIndex--;
//   }

//   imageLink.on("click", function() { 
//     node.closest("ul").find("li").css("border", "3px solid red").closest("ul").siblings().find("li").css("border", "none");
//     //Set the image in the $lightBox div to be from the gallery image src.    
//     createLightBox();
//     //Append lightbox to its relative image in the gallery.
//     $append;
//     //Fade in the $lightBoxEven div.
//     $lightBox.fadeIn(100);
//     // console.log("The parent ul index is " +currentIndex+ " and it has " +$(this).length+ " list items in it.");
    
    
//     //RIGHT
//     $lightBox.on("click", ".next", function(event) {
//         event.preventDefault();
//       if (currentIndex == imageParentTwoLI.length) {

//       } else {
//         createLightBox();
//         next();
//       }

//       console.log(currentIndex);
//     });


//     //LEFT
//     $lightBox.on("click", ".previous", function(event) {
//       event.preventDefault();
      
//       if (currentIndex == "-1") {
       
//       } else  {
//         createLightBox();
//         previous();
        
//       }
//       console.log(currentIndex);
//     });


//     //CLOSE
//     $lightBox.on("click", ".close", function(){
//       //Hide lightBox.
//       $(this).closest($lightBox).fadeOut();
//       currentIndex = imageParentTwoLI.length - imageParentTwoLI.length;
//     });
//     // });
//   });
  
//     gallery_index++;  
//     console.log('gallery_index: ' + gallery_index);
// });


var $element = $('.each-gallery img');

// Functional and original.

// Open imgBox.
$element.on('click',function() {
  // event.preventDefault();
  var imgSource = $(this).attr('src');

  $element.closest('li').removeClass('active-image');
  $(this).closest('li').addClass('active-image');
  
  $('.imgBox li').remove();
  $('.imgBox').show();
  $('<li><img src="'+imgSource+'" /></li>')
  .fadeIn(400).appendTo($('.imgBox'));
});

// Next button behaviour.
$('.next').on('click', function() {
  var currentImg = $('.active-image');
  var nextImg = currentImg.next();
  var nextImgSource = nextImg.find('img').attr('src');
  
  if (nextImg.length === 0) {
    nextImg = currentImg.closest('.each-gallery').children().first();
    nextImgSource = nextImg.find('img').attr('src');
  }

  currentImg.removeClass('active-image');
  nextImg.addClass('active-image');
  
  
  $('.imgBox li').remove();
  $('<li><img src="'+nextImgSource+'" /></li>')
  .fadeIn(400).appendTo($('.imgBox'));

  position($('.lightBox'));

  console.log("The next item length is " + nextImg.length);
  console.log(nextImgSource);

});

// Previous button behaviour.
$('.previous').on('click', function() {
  var currentImg = $('.active-image');
  var prevImg = currentImg.prev();
  var prevImgSource = prevImg.find('img').attr('src');

  if(prevImg.length === 0) {
    prevImg = currentImg.closest('.each-gallery').children().last();
    prevImgSource = prevImg.find('img').attr('src');
  }

  currentImg.removeClass('active-image');
  prevImg.addClass('active-image');

  $('.imgBox li').remove();
  $('<li><img src="'+prevImgSource+'" /></li>')
  .fadeIn(400).appendTo($('.imgBox'));

  console.log("The previous item length is " +prevImg.length);
  console.log("Previous clicked");
});

// Close button behaviour.
$('.close').on('click', function() {
  $('.imgBox').fadeOut(400);
});


// Code I was inspired by and thought I could use.

// var E = $("a", "#img-list"), N = 0, T = E.length-1;

// $("#display").html('<img src="'+$(E[N]).attr('href')+'" />');
// $('#next, #prev').on('click', function() {
//     var A = this.id == 'next',X=A?T:0,Y=A?0:T,Z=A?N+1:N-1;N=N==X?Y:Z;
//     $("#display").html('<img src="'+$(E[N]).attr('href')+'" />');
// });
// E.on('click', function(e) {
//     var S = $(this).attr('href');
//     $("#display").html('<img src="'+S+'" />');
//     e.preventDefault();
// });


// Centering light box in center of viewable window.

function position(elem) {
  var docHeight = $(window).height();
  var docWidth = $(window).width();
  

  var docYcenter = docHeight / 2;
  var docXcenter = docWidth / 2;

  var elemHeight = ($(elem).outerWidth() / 4) * 3;
  var elemWidth = $(elem).outerWidth();

  if(elemHeight > elemWidth) {
    $(elem).width('65%');
  }
  
  console.log("The lightBox height is " +elemHeight);
  console.log("The lightBox width is " +elemWidth);

  var elemYcenter = elemHeight / 2;
  var elemXcenter = elemWidth / 2;

  var elemYposition = docYcenter - elemYcenter;
  var elemXposition = docXcenter - elemXcenter;

  $(elem).css({"position": "fixed", "top": elemYposition, "left": elemXposition });

}

position($('.lightBox'));

$(window).on('resize', function() {
  position($('.lightBox'));
});
















