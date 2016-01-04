$(document).ready(function() {
$("#browser").text(window.navigator.userAgent);
  $(window).on("resize load", function(event){
    $("#width").text(window.innerWidth);
    $("#heigth").text(window.innerHeight);
  });
});
