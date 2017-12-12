$(document).ready(function(){
  $(".modal").modal();
  $("#name, #phone").keypress(function(){
    if ($("#name").val().length !== 0 && $("#phone").val().length !== 0 ) {
      $("#add-btn").removeClass("disabled");
    }
  });
  $("#name, #phone").blur(function(){
    if ($("#name").val().length == 0 || $("#phone").val().length == 0 ) {
      $("#add-btn").addClass("disabled");
    }
  })
});