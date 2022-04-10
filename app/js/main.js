$(function(){

  // кастом инпут, добавляем + - как нам надо...
  $('.products-card__input').styler();
  $('.basket-card__input').styler();
  
  $('.header-bottom__btn, .header-bottom__item').on('click', function () {
    $('.header-bottom__list').toggleClass('header-bottom__list--active');
    $('.header-bottom__btn').toggleClass('header-bottom__btn--active'); 
  })

  $('.user-nav__link-basket, .basket__exit').on('click', function () {
    $('.basket').toggleClass('basket--active');
    $('body').toggleClass('body--hidden');
  })

  $('.form-search__btn-mobile').on('click', function () {
    $('.form-search__input-mobile').toggleClass('form-search__input-mobile--active');
    $('.form-search__btn').toggleClass('form-search__btn--active');
    $('.form-search__btn-mobile').toggleClass('form-search__btn-mobile--active');
    $('.form-search').toggleClass('form-search--mobile');
    $('body').toggleClass('body--hidden');
  })

  $('.top-slider__items').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
  })

  // var mixer = mixitup('.top-products__content'); для одного слайдера на странице, тогда div container не нужен

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  
})