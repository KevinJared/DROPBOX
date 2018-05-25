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

    $(document).submit(function() {
      $('.container-fluid').hide();
    });
  });
});
// dropdown buttons
function myFunction() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {

    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
