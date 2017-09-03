import $ from "jquery";
const spaces = () => {
  console.log('spaces');

  $(document).ready(function(){
      $('.cr-spaces-slider').slick({
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]
      });

  });

}

export default spaces;
