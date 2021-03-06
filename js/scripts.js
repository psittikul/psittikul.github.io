$(function () {
    $("[data-toggle='tooltip']").tooltip();
    // Add loaded class to body for cool transitions
    $("body").addClass("loaded");

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        console.log("Element top: " + elementTop + " Element bottom: " + elementBottom + " Viewport top: " + viewportTop + " Viewport bottom/2: " + viewportBottom / 2);
        return elementBottom > viewportTop && elementTop < (viewportBottom / 1.25);
    };
    $(window).on('resize scroll', function () {
        // Don't do anything if there isn't actually a carousel on the page
        if ($(".carousel").length < 1) {
            return;
        }
        if ($("#latestWorkCarousel").isInViewport()) {
            $("#latestWorkCarousel").removeClass("out-of-focus");
        }
        else {
            $("#latestWorkCarousel").addClass("out-of-focus");
        }
    });
});