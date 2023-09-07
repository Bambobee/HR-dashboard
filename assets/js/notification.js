$(document).ready(function () {
    $(".profile .icon_wrap").click(function () {
        $(this).parent().toggleClass("active");
        $(".notifications").removeClass("active");
        $(".style-switcher").removeClass("active");
        $(".message").removeClass("active");
    });

    $(".notifications .icon_wrap").click(function () {
        $(this).parent().toggleClass("active");
        $(".profile").removeClass("active");
        $(".style-switcher").removeClass("active");
         $(".message").removeClass("active");
    });

    $(".message .icon_wrap").click(function () {
        $(this).parent().toggleClass("active");
        $(".profile").removeClass("active");
        $(".notifications").removeClass("active");
        $(".style-switcher").removeClass("active");
    });

    $(".style-switcher-toggler").click(function () {
        $('.style-switcher').toggleClass("active");
        $(".notifications").removeClass("active");
        $(".profile").removeClass("active");
         $(".message").removeClass("active");
    })


});