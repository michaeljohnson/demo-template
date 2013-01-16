/*
 * Call some of our helper functions - plugins.js
 * https://github.com/h5bp/mobile-boilerplate/wiki/JavaScript-Helper
 */

MBP.scaleFix();
MBP.hideUrlBarOnLoad();
//new MBP.autogrow(document.getElementById('myTextarea'), 14); // 14 - line height

/**
 *  Call our functions
 */

(function($){

$(function() {

    comboWindowScroll();
    $(window).on( 'scroll', function() {
        comboWindowScroll();
    });
    
    $('.bookmark').on( 'click', function(e) {
        doScrollTo( args = { data : { scrollto_hash: $(this).attr('href'), scrollto_speed: 1000, scrollto_offset: 0 } } );
    });
    
    if( $('#featured-carousel').length ) {
        //$('#featured-carousel').carousel(); // bootstrap.js
    }

}); // End document.load (DOM loaded)

$(window).load(function() {



}); // End window.load (Everything loaded)

function doScrollTo(e) {
    $.scrollTo( e.data.scrollto_hash, e.data.scrollto_speed, { axis: 'y', offset: e.data.scrollto_offset } );
}

function comboWindowScroll() {
    if( $(window).scrollTop() > 100 ) {
        $('.navbar').not('.navbar-fixed-top').hide().addClass('navbar-fixed-top').fadeIn( 400 );
        $("#back-to-top").fadeIn();
    } else if( $(window).scrollTop() < 60 ) {
        $('.navbar.navbar-fixed-top').not('.toolbar').removeClass('navbar-fixed-top').show();
        $("#back-to-top").fadeOut();
    } else {
        $('body.toolbar').removeClass('toolbar');
    }
};

})(this.jQuery); // End jquery namespace