let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

$('.item').on('click', function () {
  $('.item').removeClass('active');
  $(this).addClass('active');
  let tabs = $(this).data("tabs");

  $('.pages').addClass('d-none');
  $('.pages[data-tabs = ' + tabs + ']').removeClass('d-none');
  $('.pages[data-tabs = ' + tabs + ']').addClass('d-block');
}) 