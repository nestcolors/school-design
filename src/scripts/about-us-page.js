import $ from "jquery";
import slick from "./slick.min.js"

const aboutUsPage = () => {

  $(document).ready(function(){
    $('.cr-portfolio-slider').slick({
      arrows: true,
      dots: true,
      centerMode: true,
      centerPadding: '0px',
      fade: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false
          }
        }
      ]
    });
    $('.cr-people-slider.about-us-people').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
         {
          breakpoint: 692,
          settings: {
            centerMode: true,
            centerPadding: '200px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]

    });

    $('.cr-recommendation-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    })
  });


  // PARALAX
  var paralaxElements = $(".js-paralax-effect");
  var paralaxContainer = $(".js-paralax-container");
  var scrollingDown = true;
  var topScrollposition = 0;
  // SCROLLING DIRECTIONS
  $(window).bind('scroll', function(event) {
      if (topScrollposition >= $(document).scrollTop().valueOf()) {
          scrollingDown = false;
          topScrollposition = $(document).scrollTop().valueOf();
      }
      else {
          scrollingDown = true;
          topScrollposition = $(document).scrollTop().valueOf();
      }
  });


  // CHECK VISIBILITY OF OBJECT
  function elementInViewport(el) {
    var top = $(el).offset().top;
    var height = el.offsetHeight;
    return (
      window.pageYOffset < top &&
      (top + height) > window.pageYOffset
    );
  }

  // ADDING PARALAX EFFECT TO ALL ELEMENTS
  paralaxElements.each(function(element) {
    var that = this;
    var translateDefault = 0;
    $(window).scroll(function(event) {
      if(elementInViewport(paralaxElements[element]) && scrollingDown) {
        translateDefault += 1;
        $(that).css('transform', 'translate(0,'+translateDefault+'px)');
      }
      if(elementInViewport(paralaxElements[element]) && !scrollingDown) {
        translateDefault -= 1;
        $(that).css('transform', 'translate(0,'+translateDefault+'px)');
      }
    });
  });
}

export default aboutUsPage;
