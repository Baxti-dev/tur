// NAV

const $body = $('body');
const $menuOpen = $('.menu-toggle');
const $menuClose = $('.cancel-btn');
const $btnSearch = $('.search-toggle');
$(function () {
    $menuOpen.click(function () {
        $body.addClass('menu-open');
    });
    $menuClose.click(function () {
        $body.removeClass('menu-open');
    });

    $btnSearch.click(function () {
        $body.toggleClass('search-open');
    });
});

$(function () {
    $('.certificate__img').click(function (event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});


// COUNTER
var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav__menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

console.log(hamburger);
