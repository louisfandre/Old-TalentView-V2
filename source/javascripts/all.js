//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$( document ).ready(function() {

    var titles = [
        'Attirez des candidats',
        'Présentez votre entreprise',
        'Visualisez les meilleurs profils',
        'Recrutez la perle rare'
    ];

 $(window).scroll(function(){
        var pos = $(this).scrollTop();
        
        if(pos == 0 ) {
            $('.top').slideUp().text(titles[0]);
        }
        if(pos > 20) {
            $('.top').slideDown();
        }
        if(pos > 60) {
            $('.top').text(titles[1]);
        }
        if(pos > 100) {
            $('.top').text(titles[2]);
        }
        if(pos > 140) {
            $('.top').text(titles[3]);
        }
    });

    $(window).on('scroll', function(){
        if ($(this).scrollTop()>400){
           $(".navbar").css("background-color","rgba(255,255,255,0.7"); 
            $(".logoscroll").attr({src: "/images/logo.png",});
        } else {
           $(".navbar").css("background-color","transparent");
           $(".logoscroll").attr({src: "/images/sigle.png",}); 
        }

        
    });


    $('a[href*=#]:not([href=#])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: target.offset().top
           }, 1000);
           return false;
         }
       }
     });

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

 });

//jQuery is required to run this code


function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
