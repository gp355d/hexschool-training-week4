console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

$(function() {
  $("#tabs-nav a").click(function(event) {
      event.preventDefault();
      $("#tabs-nav a").removeClass("tabs-menu-active");
      $(this).addClass("tabs-menu-active");
      $(".tabs-panel").removeClass("animated-tabs bounceIn").hide();
      var tab_id = $(this).data("target");
      $("#"+tab_id).addClass("animated-tabs bounceIn").show();
  });
});