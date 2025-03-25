$(document).ready(function () {
  if (window.innerWidth < 768) {
    $('.prismfly-travel-cards').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    setTimeout(function () {
      let maxHeight = 0;
      $('.prismfly-card').each(function () {
        const cardHeight = $(this).outerHeight();
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });

      $('.prismfly-card').css('height', maxHeight + 'px');
    }, 300); 
  }
});
