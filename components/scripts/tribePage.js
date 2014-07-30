
$(".tribeList").hide();

$(".tribediv").on("click", ".tribeorb", function() {
  
  //When first .tribeorb clicked it slideToggles.
  $(this).closest("div").next(".tribeList").slideToggle("fast")
  
  //When next header is clicked it slides down as previous header slides up.
  .closest(".tribediv").siblings().find(".tribeList:visible").slideUp("fast");  
   
});