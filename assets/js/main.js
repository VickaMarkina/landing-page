(function($) {
    
let header = $(".header-navbar");
let changeScroll = 100;

// меню скрол
$(window).on('scroll', () => {
     $(window).scrollTop() > changeScroll
     ? header.addClass('header-navbar--scrolled')
     :header.removeClass('header-navbar--scrolled');
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
