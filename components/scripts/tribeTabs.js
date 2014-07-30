

////////////When tab clicked////////////

$("nav").on("click", "button", function(evt) {
  
    //Code I came up with!!!
    /*var self = $(this);
    if(self.hasClass("logintab")) {
      self.closest("nav").next().find(".gender").addClass("hiddenField");
      self.closest("nav").next().find(".tribes").addClass("hiddenField");
      self.closest("nav").next().find(".login").removeClass("hiddenField");
    } else if (self.hasClass("gendertab")) {
      self.closest("nav").next().find(".login").addClass("hiddenField");
      self.closest("nav").next().find(".tribes").addClass("hiddenField");
      self.closest("nav").next().find(".gender").removeClass("hiddenField"); 
    } else if (self.hasClass("tribetab")) {
      self.closest("nav").next().find(".login").addClass("hiddenField");
      self.closest("nav").next().find(".gender").addClass("hiddenField");
      self.closest("nav").next().find(".tribes").removeClass("hiddenField");  
    }
    */

//Code inspired by experienced developer!!!

  //Make all navtabs inactive.
  $("nav button").prop("id", "");

  //Make the one clicked active. 
  $(this).prop("id", "activetab"); 

  //Hide all the fieldsets.
  $("fieldset").prop("id", "hiddenField");

  //Get the title of the nav clicked.
  var tabClicked = $(this).attr("data");

  //Make the class of what we clicked not hidden.
  $("fieldset[data=" +tabClicked+ "]").prop("id", "");

});

  ////////////Next Button Functionality////////////

$(".next").on("click", function(evt) {
  evt.preventDefault();
  //Hide all the fieldsets.
  $(this).closest("fieldset").prop("id", "hiddenField");

  //Make the one after the next button active.
  $(this).closest("fieldset").next().prop("id", "");
});

  
////////////Previous button functionality.////////////

$(".prev").on("click", function(evt) {
  evt.preventDefault();
  //Hide all fieldsets.
  $(this).closest("fieldset").prop("id", "hiddenField");

  //Make the fieldset before the prev button active.
  $(this).closest("fieldset").prev("fieldset").prop("id", "");
});


/////////////When submit button clicked/////////////////
////////////HTML alert styling. Not sure if necessary//

/*
$("form.form").submit(function(evt) {
  evt.preventDefault();
  $(".message").empty();
  $(".alert").remove();

  if (($("input[type=name]").val() === "") || ($("input[type=password]").val() === "") || ($("input[type=email]").val() === "")) {
    if ($("input[type=name]").val() === "") {
      $(".message").append("<p>You forgot to enter your name.</p>");
      $("#myname").after("<div class='alert' id='alertname'>Enter your name</div>");
    }
    if ($("input[type=password]").val() === "") {
      $(".message").append("<p>You forgot to enter your password</p>");
      $("#mypassword").after("<div class='alert' id='alertpassword'>Enter your password</div>");
    }
    if ($("input[type=email]").val() === "") {
      $(".message").append("<p>You forgot to enter your email address</p>");
      $("#myemail").after("<div class='alert' id='alertemail'>Enter your email</div>");
    }
    return false;
  }
  return true;
});
*/


