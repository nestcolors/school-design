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
    $('.cr-people-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // centerMode: true,
      // centerPadding: '150px',
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
  });

}
export default aboutUsPage;
