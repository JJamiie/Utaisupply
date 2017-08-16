var heightNav = $('.navbar').height();
var heightTab = $('.tabs').height();

new Vue({
    el: '#tab-laser-cutting',
    data: {},
    methods: {
        scroll: function() {
            $('html, body').animate({
                scrollTop: $("#laser-cutting").offset().top - heightNav - heightTab
            }, 500);
        }
    }
})

new Vue({
    el: '#tab-plasma-cutting',
    data: {},
    methods: {
        scroll: function() {
            $('html, body').animate({
                scrollTop: $("#plasma-cutting").offset().top - heightNav - heightTab
            }, 500);
        }
    }
})


new Vue({
    el: '#tab-metal-cutting',
    data: {},
    methods: {
        scroll: function(event) {
            $('html, body').animate({
                scrollTop: $("#metal-cutting").offset().top - heightNav - heightTab
            }, 500);
        }
    }
})

new Vue({
    el: '#tab-fold',
    data: {},
    methods: {
        scroll: function(event) {
            $('html, body').animate({
                scrollTop: $("#fold").offset().top - heightNav - heightTab
            }, 500);
        }
    }
})


new Vue({
    el: '#tab-bend',
    data: {},
    methods: {
        scroll: function(event) {
            $('html, body').animate({
                scrollTop: $("#bend").offset().top - heightNav - heightTab
            }, 500);
        }
    }
})

$(window).scroll(function(e) {
    var heightCover = 400;
    var $el = $('#tab-menu');
    var isPositionFixed = ($el.css('position') == 'fixed');

    if ($(this).scrollTop() > heightCover && !isPositionFixed) {
        $('#tab-menu').css({
            'position': 'fixed',
            'top': heightNav
        });
        $('.content-service-main').css({
            'padding-top': heightTab
        });
    }
    if ($(this).scrollTop() < heightCover && isPositionFixed) {
        $('#tab-menu').css({
            'position': 'static',
            'top': heightNav
        });
        $('.content-service-main').css({
            'padding-top': 0
        });
    }
});

$(document).ready(function() {
  $('.parallax').parallax();
});
