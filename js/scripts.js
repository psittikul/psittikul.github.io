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
            console.log("At least half of carousel is in viewport?!");
            $("#latestWorkCarousel").removeClass("out-of-focus");
        }
        else {
            console.log("Carousel is mostly out of viewport?");
            $("#latestWorkCarousel").addClass("out-of-focus");
        }
    });
    $("#flipbook").turn({
        width: 1200,
        height: 720,
        autoCenter: true,
        // pages:6,
        gradients:true
    });
    $("#flipbook").bind("turning", function(event, page, view) {
        console.log("Turning page to: " + page);
        console.log("Visible pages: " + view);
      });
});