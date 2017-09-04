import $ from "jquery";
import slick from "./slick.min.js"

const aboutCoursePage = () => {
  console.log("aboutCoursePage");

  $(document).ready(function(){

    $('.cr-our-works').slick({
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
    $('.cr-people-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
         {
          breakpoint: 692,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]

    });
    $('.cr-courses-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });

  });

  window.onscroll = function() {showBar()};

  var scrollPosition = document.body.scrollTop + window.innerHeight;
  var pageHeight = document.body.clientHeight;
  var some = (document.body.scrollTop + window.innerHeight) - document.body.clientHeight;
  var currentHeight = function() {
    return ((document.body.scrollTop + window.innerHeight) - document.body.clientHeight)
  }
  function showBar() {
      if (document.body.scrollTop > 700 && currentHeight() < -300) {
          $('.fixed-to-screen').fadeIn(100);
      } else {
          $('.fixed-to-screen').fadeOut(100);
      }
  }

}
export default aboutCoursePage;
