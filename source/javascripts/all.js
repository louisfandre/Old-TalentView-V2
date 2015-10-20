//= require jquery
//= require bootstrap-sprockets
//= require_tree .



var titles = [
    'Attirez des candidats',
    'Présentez votre entreprise',
    'Visualisez les meilleurs profils',
    'Recrutez la perle rare'
];

$(window).scroll(function(){
    var pos = $(this).scrollTop();
    
    if(pos < 0) {
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