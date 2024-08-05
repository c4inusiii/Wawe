$(function() {


  $('.slider__inner').slick({
    dots: true,
    arrows: false
  });

  $(".header__menu a").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
    top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('.menu__btn, .header__list-link').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });


  var mixer = mixitup(".gallery__images");

});