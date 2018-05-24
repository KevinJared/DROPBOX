$(document).ready(function() {

  var modal = document.getElementById('myModal');

  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
$(document).ready(function() {
  $("#login form").submit(function(event) {
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();

    $(".name").append(nameInput);
    $(".email").append(emailInput);

    $(".big-wrapper").show();

    event.preventDefault();
  });
});
