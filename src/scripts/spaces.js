import $ from "jquery";
const spaces = () => {
  console.log('spaces');

  $('.space-selector-item').click(function(e) {
    e.preventDefault()
    const nextSpace = e.target.getAttribute('data-space-name');
    const currentSlider = $('.visible-slider');
    const currentLink = $('.active-link');

    // handling active state for spaces link
    currentLink.removeClass('active-link');
    $(`.${nextSpace}`).addClass('active-link');

    // handling active state for spaces gallery
    currentSlider.removeClass('visible-slider');
    $(`#${nextSpace}`).addClass('visible-slider');

    initSlick(nextSpace);
    $(currentSlider[0]).slick('unslick');
  })

  $(document).ready(function(){
    initSlick($('.cr-spaces-slider')[0].id);
  });

  const initSlick = (val) => {
    $(`#${val}`).slick({
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
  }

}

export default spaces;
