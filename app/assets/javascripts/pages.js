/* global $ */

$(document).on('turbolinks:load', function(){
    var small={ 
                display: "block",
                position: "static",
                width: "100%", 
                borderRadius: "5px", 
                zIndex: "9"
    };
                
    var large={  display: "block",
                 position: "absolute",
                 width: "1000px",
                 backgroundColor: "black",
                 zIndex: "9",
                 borderRadius: "5px"
     };
    var count=1;
    $("img").css(small).on('click', function(){
        $(this).animate((count==1)?large:small);
        count = 1-count;
    });
});