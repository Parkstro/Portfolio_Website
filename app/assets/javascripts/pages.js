/* global $ */

$(document).ready( function(){
    $("img").click(function(){
        $("img", "#img1").animate({
            display: 'block',
            position: 'absolute',
            align: 'center',
            background: 'ffffff',
            height: '750px',
            width: '1000px',
            zIndex: '9'
        });
    });
    $("img" ).click(function(){
        $("img", "#img2" ).animate({
            display: 'block',
            position: 'absolute',
            align: 'center',
            background: 'ffffff',
            height: '750px',
            width: '1000px',
            zIndex: '9'
        });
    });
});