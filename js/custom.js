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
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
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
    $('.btn-burger-menu').on('click', function (e) {
        e.preventDefault();
        $('.main-menu-mobile').addClass('active');

    });
    $('.main-menu-mobile .btn-close').on('click', function (e) {
        e.preventDefault();
        $('.main-menu-mobile').removeClass('active');

    });
    $('.main-menu-mobile a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        $('.main-menu-mobile').removeClass('active');
        return false;
    });

    $('.paralax').paroller({ factor: -0.7, type: 'foreground' });
    $('.paralax-2').paroller({ factor: -0.1, type: 'foreground' });
    $('.paralax-1').paroller({ factor: -0.3, type: 'foreground' });
    

    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            $('.hero-wrapper .title').css('display', 'none');
            $('.ochki').css('display', 'none');
        }

        return "unknown";
    }
    getMobileOperatingSystem();
});
