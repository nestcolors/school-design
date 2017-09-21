import $ from "jquery";
// import gm123 from "./google-maps.js";

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

  // var close_mobile_menu = header.find(".cr-close-btn");
  // close_mobile_menu.click(function(event) {
  //   header.find('.cr-header__fixed-part').fadeOut().toggleClass('mod-mobile-menu-closed');
  //       header.toggleClass('mod-mobile-opened');
  // });
  // var open_mobile_menu = header.find(".cr-burger-btn");
  // open_mobile_menu.click(function(event) {
  //   header.find('.cr-header__fixed-part').fadeIn().toggleClass('mod-mobile-menu-closed');
  //   header.toggleClass('mod-mobile-opened');
  // });

  // var mobile_burger_btn =  header.find(".cr-burger-btn");
  // mobile_burger_btn.click(function(event) {
  //   // header.find('.cr-header__fixed-part').toggleClass('mod-mobile-menu-closed');
  //   header.toggleClass('mod-mobile-opened');
  // });

  $('.cr-hero-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
  });

  $('.cr-mobile-hero-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  });

  $('.cr-hero-slider .slick-slide.slick-current video')[0].play();
  $('.cr-hero-slider').on('afterChange', function(event, slick, currentSlide){
    $('.cr-hero-slider .slick-slide.slick-current video')[0].play();
  });


}


export default homePage;