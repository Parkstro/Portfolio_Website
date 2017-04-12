/* global $ */

$(document).ready( function(){
    var small={ width: "100%", 
                borderRadius: "5px", 
                zIndex: "9"
    };
                
    var large={    display: "inline-block",
    "position": "absolute",
    "left": "auto",
     "width": "1000px",
     "backgroundColor": "black, 0.9",
     
     zIndex: "9"
     };
    var count=1;
    $("img").css(small).on('click', function(){
        $(this).animate((count==1)?large:small);
        count = 1-count;
    });
});