jQuery(function($) {
    $.fn.parallax = function() {
        let window_width = $(window).width();
        // Parallax Scripts
        return this.each(function(i) {
            let $this = $(this);
            $this.addClass('parallax');

            function updateParallax(initial) {
                let container_height;
                if (window_width < 601) {
                    container_height = $this.height() > 0 ? $this.height() : $this.children("img").height();
                } else {
                    container_height = $this.height() > 0 ? $this.height() : 400;
                }
                let $img = $this.children("img").first();
                let img_height = $img.height();
                let parallax_dist = img_height - container_height;
                let bottom = $this.offset().top + container_height;
                let top = $this.offset().top;
                let scrollTop = $(window).scrollTop();
                let windowHeight = window.innerHeight;
                let windowBottom = scrollTop + windowHeight;
                let percentScrolled = (windowBottom - top) / (container_height + windowHeight);
                let parallax = Math.round(parallax_dist * percentScrolled);

                if (initial) {
                    $img.css('display', 'block');
                }
                if (bottom > scrollTop && top < scrollTop + windowHeight) {
                    $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
                }
            }

            // Wait for image load
            $this.children("img").one("load", function() {
                updateParallax(true);
            }).each(function() {
                if (this.complete) $(this).trigger("load");
            });

            $(window).scroll(function() {
                window_width = $(window).width();
                updateParallax(false);
            });

            $(window).resize(function() {
                window_width = $(window).width();
                updateParallax(false);
            });
        });
    };
});