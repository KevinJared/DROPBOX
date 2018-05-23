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

  $("#login form").submit(function() {
    var name = document.getElementById("name");
    var email = document.getElementsById("email");

    name.submit = function(event) {
      $("#name").append(nameInput);
    }
    email.submit = function(event) {
      $("#email").append(emailInput);
    }

  });
});
