$(document).ready(function () {

    //FullPage.js
    $('#fullpage').fullpage({
        v2compatible: true,
        anchors: [ 'home', 'rooms', 'standardroom', 'terracegardensuite', 'seasidesuite', 'flammsuite', 'eatdrink', 'lunch', 'dinner', 'drink', 'artflamm', 'weddingsevents', 'gallery', 'covid19', 'contact' ],
        menu: '#menu',
        scrollOverflow: true,
        css3: true,
        scrollOverflowReset: true,
        responsiveWidth: 1100,
        afterResponsive: function(isResponsive){

        },
        onLeave: function(){
            $('.section [data-aos]').removeClass("aos-animate");
        },
        onSlideLeave: function(){
            $('.slide [data-aos]').removeClass("aos-animate");
        },
        afterSlideLoad: function(){
            $('.slide.active [data-aos]').addClass("aos-animate");
        },
        afterLoad: function(anchorLink,index){
            $('.section.active [data-aos]').addClass("aos-animate");
            if (index == 1) {
                $('#mainmenu').removeClass("compressed");
            } else {
                $('#mainmenu').addClass("compressed");
            }
            // if (index == 1 || index == 3 || index == 5) {
            //     $('#menu li').addClass('menu-border-dark').removeClass('menu-border-light');
            // } 
            // if (index == 2 || index == 4) {
            //     $('#menu li').addClass('menu-border-light').removeClass('menu-border-dark');
            // } 
            // if (index == 7) {
            //     $('#lefttoplogo img').stop(true,true).addClass('logo-outline', 5000);
            //     // $("#lefttoplogo img").fadeIn("slow", function() {
            //     //     $(this).addClass("logo-outline");
            //     // });
            // } 
            // else {
            //     $('#lefttoplogo img').stop(true,true).removeClass('logo-outline', 5000);
            //     // $("#lefttoplogo img").fadeIn("slow", function() {
            //     //     $(this).removeClass("logo-outline");
            //     // });
            // }
        }
    });
    // $.fn.fullpage.setMouseWheelScrolling(false);
    // $.fn.fullpage.setAllowScrolling(false);
    
    
    //AOS.js
    AOS.init({
        mirror: true,
        duration: 1200,
        once: true,
    });

    //FancybOx.js
    $('.fancybox').fancybox();

    //Bootstrap
    $('[data-toggle="tooltip"]').tooltip();
    $("[data-toggle=popover]").popover({
        trigger: 'focus'
    });

});
