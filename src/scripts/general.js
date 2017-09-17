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

  /*
  on hover show submenu
  */
  $('.cr-sublist-container').hover((i) => {
    $('.cr-sublist-container > ul').fadeIn(0);
    $('.cr-sublist-container > ul').addClass('show-cr-list-sub-menu');
  }, (i) => {
    $('.cr-sublist-container > ul').fadeOut();
  });

  /*
  on hover show list
  */
  $('.cr-type-select').hover((i) => {
    $('.show-on-click').fadeIn(0);
    $('.show-on-click').addClass('show-level-list');
  }, (i) => {
    $('.show-on-click').fadeOut();
  });
  // $('.cr-type-select').on('click', function(){
  //   // $('.show-on-click').slideToggle();
  //   $('.show-on-click').toggleClass('show-level-list');
  // })

  // mobile menu
  var close_mobile_menu = header.find(".cr-close-btn");
  close_mobile_menu.click(function(event) {
    header.find('.cr-header__fixed-part').addClass('mod-mobile-menu-closed');
  });
  var open_mobile_menu = header.find(".cr-burger-btn");
  open_mobile_menu.click(function(event) {
    header.find('.cr-header__fixed-part').removeClass('mod-mobile-menu-closed');
  });

  // detect scrolling direction
  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
         // downscroll code
     } else {
        // upscroll code
     }
     lastScrollTop = st;
  });

  // $('document').ready(() => {
  //   $('.cr-header, .cr-header__fixed-part').css(
  //     'width', window.innerWidth
  //   )
  //   console.log('window.innerWidth', window.innerWidth);
  // })
}

export default general;
