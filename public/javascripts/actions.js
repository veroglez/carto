$(document).ready(function() {
  var touch = $('#responsive-menu');
  var menu = $('.menu-navigation');

  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(window).width();
    if (w > 924 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
