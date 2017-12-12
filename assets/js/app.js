$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".modal").modal();
  $("#name, #phone").keypress(function(){
    var name = $("#name").val();
    var phone = $("#phone").val();
    if (name.length !== 0 && phone.length !== 0 ) {
      $("#add-btn").removeClass("disabled");
    }
  });

  $("#name, #phone").blur(function(){
    if ($("#name").val().length == 0 || $("#phone").val().length == 0 ) {
      $("#add-btn").addClass("disabled");
    }
  });

  $("#add-btn").click(function(){
    var contactList = $("#contact-list-here");
    var item = $("<li class='collection-item avatar'><i class='material-icons circle'>account_circle</i><span class='title'>"
      +$("#name").val()+"</span><p>"+$("#phone").val()+"</p><a href='#'' class='secondary-content'><i class='material-icons delete'>delete_forever</i></a></li>");
    item.appendTo(contactList);
    $("#name").val("");
    $("#phone").val("");
    $('#modal-add').modal('close');
    $(".delete").click(function() {
      $(this).parentsUntil("ul").remove();
    });
  });
  $(".delete").click(function() {
    $(this).parentsUntil("ul").remove();
  });
});



// $("#add-btn").click(function(){
//         var contactList = $("#contact-list-here");
//         var item = $("<li class='collection-item avatar'><i class='material-icons circle'>account_circle</i><span class='title'>"
//           +name+"</span><p>"+phone+"</p><a href='#'' class='secondary-content'><i class='material-icons'>delete_forever</i></a></li>");
//         item.appendTo(contactList);
//       });