//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$( document ).ready(function() {


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



    $(window).scroll(function() {
        $('.pop').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass("slideUp");
            }
        });
    });

 });

//jQuery is required to run this code
