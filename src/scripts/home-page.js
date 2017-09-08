import $ from "jquery";


const homePage = () => {
  var main_menu = $("#js-main-menu");

  main_menu.find('.cr-panel__item-title').click(function(event) {
    $(this).siblings(".cr-panel__item-content").toggleClass('mod-open');
    $(this).toggleClass('mod-active');
  });

  main_menu.find('.cr-hover-menu').hover(function(event) {
    $(this).find(".cr-hover-menu__content").toggleClass('mod-open');
    $(this).find(".cr-hover-menu__title").toggleClass('mod-active');
  });

  main_menu.find('.cr-accordeon__title').click(function(event) {
    $(this).toggleClass('mod-active');
    $(this).siblings(".cr-accordeon__content").toggleClass('mod-open');
  });

  var body = $('body');
  var header = $('#js-header');
  var header_fixed_part = header.find('.cr-header__fixed-part');
  var motto_height = header.find('.cr-header__motto').outerHeight();

  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll >= motto_height) {
        header_fixed_part.addClass('mod-fixed');
      }
      else {
        header_fixed_part.removeClass('mod-fixed');
      }
  });

  var close_mobile_menu = header.find(".cr-close-btn");
  close_mobile_menu.click(function(event) {
    header.find('.cr-header__fixed-part').fadeOut().addClass('mod-mobile-menu-closed');
  });
  var open_mobile_menu = header.find(".cr-burger-btn");
  open_mobile_menu.click(function(event) {
    header.find('.cr-header__fixed-part').fadeIn().removeClass('mod-mobile-menu-closed');
  });

}

export default homePage;

$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  })
});