import $ from "jquery";

const general = () => {
  var body = $('body');
  var header = $('#js-header');
  var header_fixed_part = header.find('.cr-header__fixed-part');
  var motto_height = header.find('.cr-header__motto').outerHeight();

  // header moto show/hide on scroll
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= motto_height) {
      header_fixed_part.addClass('mod-fixed');
    }
    else {
      header_fixed_part.removeClass('mod-fixed');
    }
  });

  // mobile menu
  var close_mobile_menu = header.find(".cr-close-btn");
  close_mobile_menu.click(function(event) {
    header.find('.cr-header__fixed-part').addClass('mod-mobile-menu-closed');
  });
  var open_mobile_menu = header.find(".cr-burger-btn");
  open_mobile_menu.click(function(event) {
    header.find('.cr-header__fixed-part').removeClass('mod-mobile-menu-closed');
  });
}

export default general;
