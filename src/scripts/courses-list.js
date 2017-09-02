import $ from "jquery";

const coursesList = () => {
  console.log('coursesList');

  var $filters = $('.filter [data-filter]'),
    $boxes = $('.boxes [data-category]'),
    $containers = $('.color-container');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);

    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    } else {
      $containers.removeClass('is-animated').fadeOut()
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $('[data-category = "' + $filterColor + '-container"]').fadeIn();
          $boxes.filter('[data-category = "' + $filterColor + '"]').each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    }
  });

}

export default coursesList;

$(document).ready(function(){
    $('.cr-spaces-slider').slick({
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    });

});
