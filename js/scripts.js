$(document).ready(function() {
        $("#blanks form").submit(function() {
          $(".name").append("");
          $(".email").append("");

          $("#story").show();
        });
      });
