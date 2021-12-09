(function($) {
    
let header = $(".header-navbar");
let changeScroll = 100;
let $btnBackTop = $('.backtop');

// кнопка в начало стр
const backTopOffset = 700;
const backTopAnimationDuration = 500;
const backTopAnimationFunction = 'swing';
const backTop = (pos) =>
  pos >= backTopOffset
    ? $btnBackTop.fadeIn(500)
    : $btnBackTop.fadeOut(500);

$btnBackTop.on('click', () => {
  $('html').animate(
    {
      scrollTop: 0
    },
    backTopAnimationDuration,
    backTopAnimationFunction
  );
  return false;
});

// меню скрол
$(window).on('scroll', () => {
     $(window).scrollTop() > changeScroll
     ? header.addClass('header-navbar--scrolled')
     :header.removeClass('header-navbar--scrolled');
     backTop($(window).scrollTop());
}); 

// отслеживание стр
$(".nav").onePageNav({
    currentClass: 'active',
    scrollSpeed: 750,
    easing: 'swing',
    filter: ':not(.navbar-brand)'
});

// плагин анимации
AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine'
});

})(jQuery);
