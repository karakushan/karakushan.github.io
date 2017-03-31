(function ($) {
    $.fn.animatemodal = function (options) {

        var opt = $.extend({
            offset: 20,
            animate: false
        }, options);
        return this.each(function () {
            var el = this;
            var modal = this.getAttribute('data-target');
            var modalContent = $(modal).find('.modal-content');
            var modalWidth = modalContent.width();
            var winWidth = $(window).width();
            var contentOffset = opt.offset * 2;

            $(modal).on('click', function (e) {
                e.preventDefault();
                if ($(modal).has(e.target).length === 0) {
                    $(modal).css({
                        display: "none"
                    })
                    $('body').css({
                        overflow: "auto"
                    })
                    modalContent.removeClass(opt.animate);
                }

            });
            $(el).on('click', function (event) {
                event.preventDefault();
                if (opt.animate) {
                    modalContent.addClass(opt.animate);
                }
                if (modalWidth > winWidth) {
                    $(modalContent).css({
                        display: "block",
                        "margin-left": -( (winWidth - contentOffset) / 2) + 'px',
                        "width": (winWidth - contentOffset) + "px"
                    })
                } else {
                    modalContent.css({
                        "margin-left": -( modalContent.width() / 2) + 'px'
                    })
                }
                $(modal).css({
                    display: "block",
                    "overflow-y": "scroll"

                })

                $('body').css({
                    overflow: "hidden"
                })


            });
        });
    };
})(jQuery);