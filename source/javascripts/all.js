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
        
        if(pos < 20 ) {
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
        if ($(this).scrollTop()>500){
           $(".navbar").css("background-color","rgba(54,53,55,0.7)"); 
        } else {
           $(".navbar").css("background-color","transparent"); 
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
 });