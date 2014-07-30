$ = require('jquery');


//When submit button clicked, depending on option, presented with 
// notification and confirm button.
 


$(".button").on("click", function(evt) {
  evt.preventDefault();

  var selection1 = $(".canadaOptions input:checked").val(),
      selection2 = $(".usOptions input:checked").val(),
      selection3 = $(".euroOptions input:checked").val();

  var confirmSelection = $("<input type='submit' value='confirm' name='confirmSubmit'>");
  
  function confirmIt() {
    $(".notify").on("click", confirmSelection, function() {
      $(this).closest(".notify").html("<p>Thank you, please proceed to payment</p>");
    }); 
  }    
  
  var departing = $("#departing").val();
  var returning = $("#returning").val();

  $(".notify").slideDown('fast', function() {
    if (departing && returning) {
      if (selection1) {
        $(this).html("<p>Please confirm your reservation for " + selection1 +  " departing on " + 
          departing + " and returning on " + returning + ".</p>");
        $(this).append(confirmSelection);
        confirmIt();
      } else if (selection2) {
        $(this).html("<p>Please confirm your reservation for " + selection2 +  " departing on " + 
          departing + " and returning on " + returning + ".</p>"); 
        $(this).append(confirmSelection);
        confirmIt(); 
      } else if (selection3) {
        $(this).html("<p>Please confirm your reservation for " + selection3 +  " departing on " + 
          departing + " and returning on " + returning + ".</p>");
        $(this).append(confirmSelection);
        confirmIt(); 
      } else {
        $(this).html("<p>Please select a departure city!</p>");
      }
    } else {
      $(this).html("<p>Please select departing and returning dates</p>");
    }
  }); 
}); 


//City options slideToggle when hovered over.

$(".choosePlace").hover(function() {
  var $destination = $(this).find(".destination");
  $destination.slideToggle(200);

});

//Selected city option is added visible.

$(".destination").on("click", "input[type=radio]", function() {

  var selection1 = $(".canadaOptions input:checked").val(),
      selection2 = $(".usOptions input:checked").val(),
      selection3 = $(".euroOptions input:checked").val();

  if (selection1) {
    $(this).closest(".places").find(".usChoice").addClass("notChoice");
    $(this).closest(".places").find(".euroChoice ").addClass("notChoice");
    $(this).closest(".destination").prev(".choice").removeClass("notChoice");
    $(this).closest(".destination").prev(".choice").html(selection1);
  } else if (selection2) {
    $(this).closest(".places").find(".cdnChoice").addClass("notChoice");
    $(this).closest(".places").find(".euroChoice").addClass("notChoice");
    $(this).closest(".destination").prev(".choice").removeClass("notChoice");
    $(this).closest(".destination").prev(".choice").html(selection2);
  } else if (selection3) {
    $(this).closest(".places").find(".cdnChoice").addClass("notChoice");
    $(this).closest(".places").find(".usChoice").addClass("notChoice");
    $(this).closest(".destination").prev(".choice").removeClass("notChoice");
    $(this).closest(".destination").prev(".choice").html(selection3);  }
});
















