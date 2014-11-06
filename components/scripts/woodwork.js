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
  
  var docHeight = $(window).height();
  var docWidth = $(window).width();
  var docYcenter = docHeight / 2;
  var docXcenter = docWidth / 2;

  function choosePosition(){

    if ($(elem).outerHeight() > $(elem).outerWidth()) {
      var portrait = $(elem).addClass('portrait');
      
      var portraitHeight = $(portrait).height();
      var portraitWidth = $(portrait).width();
      var portraitYcenter = portraitHeight / 2;
      var portraitXcenter = portraitWidth / 2;
      var portraitYposition = docYcenter - portraitYcenter;
      var portraitXposition = docXcenter - portraitXcenter;
      
      $(portrait).css({"top": portraitYposition, "left": portraitXposition});
    
    } else if ($(elem).outerHeight() < $(elem).outerWidth())  {
      var landscape = $(elem).removeClass('portrait');
      
      var landscapeHeight = $(landscape).height();
      var landscapeWidth = $(landscape).width();
      var landscapeYcenter = landscapeHeight / 2;
      var landscapeXcenter = landscapeWidth / 2;
      var landscapeYposition = docYcenter - landscapeYcenter;
      var landscapeXposition = docXcenter - landscapeXcenter;
      
      $(landscape).css({"top": landscapeYposition, "left": landscapeXposition});
    }
    $(window).css({"background": "black"});
    $(window).css({"background": "black"});
  }
  return choosePosition();
}


$(document).ready(function() {
  position($('.lightBox'));
});


$(window).on('resize', function() {
  position($('.lightBox'));
});
















