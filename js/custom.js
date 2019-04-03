$(function () {
    $('.move-list').slick({
        slidesToShow: 3,
        infinite: true,
        autoplaySpeed: 3000,
        // autoplay: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipeToSlide: true,
        responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            }
        ]
    });
       $(".paralax").paroller({ factor: '0.3', type: 'foreground', direction: 'horizontal' });

    var $page = $('html, body');
    $('.main-menu a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});
