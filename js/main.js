$(document).ready(function() {
    $('.second').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:-2,
        nav:true,
        mouseDrag:false,
        smartSpeed:750,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.first').owlCarousel({
        stagePadding: 350,
        loop:true,
        margin:-2,
        nav:true,
        mouseDrag:false,
        smartSpeed:750,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".owl-item").css("opacity",".5");
    $(".owl-item.active").css("opacity","1");

    $("button").on("click",function() {
        $(".owl-item").css("opacity",".5");
        $(".owl-item.active").css("opacity","1");
    })

    $(".Specifications").on("click",function() {
        $(".speclist").slideToggle(400);
        $(".fa-plus").toggle();
        $(".fa-minus").toggle();
        $(".special").slideToggle(400)
    })

    $(".benefits").on("click",function() {
        $(".special").slideToggle(400);
        $(".fa-plus").toggle();
        $(".fa-minus").toggle();
        $(".speclist").slideToggle(400)
    })

    $(window).scroll(function() {
        if($(window).scrollTop() > 1000) {
            $(".scroll").fadeIn(400)
        } else {
            $(".scroll").fadeOut(400)
        }
    })

    $(".scroll").on("click",function() {
        $("body,html").animate({
            scrollTop:0
        })
    })

    $(".back").on("click",function() {
        $(".hide-video").fadeIn(400);
        $("body").css({
            overflow:"hidden"
        })
    })

    $(".icon").on("click",function() {
        $(".hide-video").fadeOut(400);
        $("body").css({
            overflow:"auto"
        })
    })


})