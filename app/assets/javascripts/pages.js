/* global $ */

$(document).ready( function(){
    $("img").click(function(){
        $("img").animate({
            display: 'block',
            position: 'fixed',
            align: 'center',
            background: 'ffffff',
            height: '750px',
            width: '1000px',
            zIndex: '9'
        });
    });
});