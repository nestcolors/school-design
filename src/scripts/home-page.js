import $ from "jquery";


const homePage = () => {
  console.log('homePage');
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
  console.log(motto_height);
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll >= motto_height) {
        header_fixed_part.addClass('mod-fixed');
        // body.addClass('header-is-fixed')
      }
      else {
        header_fixed_part.removeClass('mod-fixed');
        // body.removeClass('header-is-fixed')
      }
  });
}
export default homePage;