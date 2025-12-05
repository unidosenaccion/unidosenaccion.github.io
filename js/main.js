$(document).ready(function () {

    // Mobile Menu Toggle
    $('.mobile-menu-toggle').click(function () {
        $('.main-nav').slideToggle();
        $(this).toggleClass('active');
    });

    // Smooth Scrolling
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80 // Adjust for fixed header
            }, 800);

            // Close mobile menu if open
            if ($(window).width() < 768) {
                $('.main-nav').slideUp();
            }
        }
    });

    // Sticky Header Effect (Optional)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.main-header').addClass('scrolled');
        } else {
            $('.main-header').removeClass('scrolled');
        }
    });

});
