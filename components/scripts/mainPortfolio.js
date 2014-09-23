//mainPortfolio JS

var $; 

$ = require('jquery');




//Show the hidden caption li when hovered over.

$(".portfolio div ul").hover(function() {
  $(this).find("li").last().fadeToggle();
});



