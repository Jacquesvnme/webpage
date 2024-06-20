$(document).ready(function() {
    $("#intro").animate({opacity: '1'}, 3000);
    $(".flex-items-dashboard").fadeOut(1);  //TODO remove this when done
    $(".intro_text").click(function() {
      $("html, body").animate({scrollTop: "900px"},1500);
      $(".flex-items-dashboard").fadeIn(3000);
    });
    $(".intro_text_subtitle").click(function() {
      $("html, body").animate({scrollTop: "900px"},1500);
      $(".flex-items-dashboard").fadeIn(3000);
    });
  });
  