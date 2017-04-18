/* global $ jQuery navigator */

$(document).on('turbolinks:load', function(){
    var small={ 
                display: "block",
                position: "relative",
                left: "",
                marginLeft: "",
                color: "transparent",
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
                color: "rgba(0,0,0,0.8)",
                borderstyle: "solid",
                zIndex: "9",
                borderRadius: "5px"
     };
     
    var count=1;
    
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    
    if(!isMobile) {
    jQuery(".col-md-8 > img").css(small).on('click', function(){
        jQuery(this).animate((count==1)?large:small);
        count = 1-count ;
    });
}});