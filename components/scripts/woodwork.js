var $;

$ = require('jquery');




var $element = $('.each-gallery img');
var $overlay = $('<div class="overlay"></div>');
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
  
  position($('.lightBox'));

  $overlay.appendTo('.container');
  
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

  position($('.lightBox'));
  
});

// Close button behaviour.

$('.close').on('click', function() {
  $('.imgBox').fadeOut(400);
  $overlay.remove();
});

$('.container').on('click', '.overlay', function(){
  $('.imgBox').fadeOut(400);
  $(this).remove();
});



// Centering light box in center of viewable window.

function position(elem){
  
  
  function choosePosition(){
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    
    if (typeof pageWidth != "number"){
      if (document.compatMode === "CSS1Compat") {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
      } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
      }
    }

    var pageYcenter = pageHeight * 0.5;
    var pageXcenter = pageWidth * 0.5;
    
    if ($(elem).innerHeight() > $(elem).innerWidth()) {
      var portrait = $(elem).addClass('portrait');
      
      var portraitYcenter = $(portrait).height() * 0.5;
      var portraitXcenter = $(portrait).width() * 0.5;
      var portraitYposition = pageYcenter - portraitYcenter;
      var portraitXposition = pageXcenter - portraitXcenter;
      
      $(portrait).css({"top": portraitYposition, "left": portraitXposition});
      
      // console.log("Page Width: " +docWidth+ ", Page Height: " +docHeight);
      // console.log("Page Width Center: " +pageXcenter+ ", Page Height Center: " + pageYcenter);
      // console.log("Top of LightBox: " + portraitYposition + ", Left of LightBox: " + portraitXposition);
      // console.log("Top to center in portrait: " +portraitYcenter+ ", Left to center in portrait: " +portraitXcenter);
      // console.log("Light Box Height: " + $(portrait).height() + ", Light Box Width: " +$(portrait).width());

    } else  {
      
      var landscape = $(elem).removeClass('portrait');
      
      var landscapeYcenter = $(landscape).height() * 0.5;
      var landscapeXcenter = $(landscape).width() * 0.5;
      var landscapeYposition = pageYcenter - landscapeYcenter;
      var landscapeXposition = pageXcenter - landscapeXcenter;
      
      $(landscape).css({"top": landscapeYposition, "left": landscapeXposition});
      
      console.log("Page Width: " +pageWidth+ ", Page Height: " +pageHeight);
      console.log("Page Width Center: " +pageXcenter+ ", Page Height Center: " + pageYcenter);
      console.log("Top of LightBox: " + landscapeYposition + ", Left of LightBox: " + landscapeXposition);
      console.log("Top to center in landscape: " +landscapeYcenter+ ", Left to center in landscape: " +landscapeXcenter); 
      console.log("Light Box Height: " + $(landscape).height() + ", Light Box Width: " +$(landscape).width());
      
    }
  }
  return choosePosition();
}


$(window).load(function() {
  position($('.lightBox'));
});


$(window).on('resize', function() {
  position($('.lightBox'));
});
















