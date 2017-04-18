/* global $ jQuery navigator */

$(document).on('turbolinks:load', function(){
    var small={ 
                display: "block",
                position: "relative",
                left: "",
                marginLeft: "",
                width: "100%", 
                borderRadius: "5px", 
                zIndex: "9"
    };
                
    var large={  
                display: "block",
                position: "fixed",
                left: "25%",
                marginLeft: "-6.25em",
                width: "125%",
                borderstyle: "solid",
                zIndex: "9",
                borderRadius: "5px"
     };
     
     
    var count=1;
    
    jQuery(".col-md-8 > img").css(small).on('click', function(){
        jQuery(this).animate((count==1)?large:small);
        count = 1-count ;
    });
});