import $ from "jquery";
import slick from "./slick.min.js"


const aboutUsPage = () => {
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
    header.find('.cr-header__fixed-part').addClass('mod-mobile-menu-closed');
  });
  var open_mobile_menu = header.find(".cr-burger-btn");
  open_mobile_menu.click(function(event) {
    header.find('.cr-header__fixed-part').removeClass('mod-mobile-menu-closed');
  });
  $(document).ready(function(){
    $('.cr-portfolio-slider').slick({
      arrows: true,
      dots: true,
    });
    $('.cr-people-slider').slick({
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
          }
        }
      ]
    });
  });

}
export default aboutUsPage;