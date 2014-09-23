var $;

$ = require('jquery');


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


var $parent = $('#imageParent li');
var $element = $('#imageParent img');
var $index = 0;
var $total = $element.length - 1;
var $nav = $('<span id="previous"><</span><span id="next">></span><span id="close">x</span>')

// $('#imgBox').html('<img src="'+$($element[$index]).attr('src')+'" />').append($nav);
$element.on('click', function(event) {
  var S = $(this).attr('src');
  $('#imgBox').html('<img src="'+S+'" />').append($nav);
  event.preventDefault();
});

$('#next').on('click', function() {
  var A = this.id == 'next';
  var X = A ? $total : 0;
  var Y = A ? 0 : $total;
  var Z = A ? $index + 1 : $index - 1;
  var $index = $index == X ? Y : Z;

  $('#imgBox').html('<img src="'+$($element[$index]).attr('src')+'" />').append($nav);
});


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
















