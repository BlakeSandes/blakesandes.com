//mainPortfolio JS

var $; 

$ = require('jquery');

//Make ul and li's to same height as img.

$(".portfolio div").each(function() {
  var $liFirst = $(this).find("li").first();
  var $liLast = $(this).find("li").last();
  var $ul = $(this).find("ul");
  
  $liFirst.css("height", $liFirst.find("img").height());
  $liLast.css("height", $liFirst.height());
  $ul.css("height", $liFirst.height());

  $(window).resize(function() {
    $liFirst.css("height", $liFirst.find('img').height());
    $liLast.css("height", $liFirst.height());
    $ul.css("height", $liFirst.height());
  });
});

//Show the hidden caption li when hovered over.

$(".portfolio div ul").hover(function() {
  $(this).find("li").last().fadeToggle();
});



