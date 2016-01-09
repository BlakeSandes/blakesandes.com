$ = require('jquery');

var $header = $('header');


if ($('body').scrollTop >= 120) {
  $header.hide();
}