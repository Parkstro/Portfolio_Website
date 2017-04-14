/* global $ jQuery finish */

$(document).on('turbolinks:load', function(){
    var small={ 
                display: "block",
                position: "relative",
                left: "auto",
                marginLeft: "",
                borderTop: "transparent",
                borderLeft: "transparent" ,
                borderRight: "transparent",
                borderBottom: "transparent",
                borderStyle: "solid",
                borderBottomWidth: "100%",
                borderTopWidth: "100%",
                borderLeftWidth: "100%",
                borderRightWidth: "100%",
                width: "100%", 
                borderRadius: "5px", 
                zIndex: "9"
    };
                
    var large={  
                display: "block",
                position: "fixed",
                left: "25%",
                marginLeft: "-6.25em",
                width: "150%",
                borderBottomColor: "rgba(0,0,0,0.8)",
                borderLeftColor: "rgba(0,0,0,0.8)" ,
                borderRightColor: "rgba(0,0,0,0.8)",
                borderTopColor: "rgba(0,0,0,0.8)",
                borderstyle: "solid",
                zIndex: "9",
                borderRadius: "5px"
     };
    var count=1;
    jQuery("img").css(small).on('click', function(){
        jQuery(this).animate((count==1)?large:small);
        count = 1-count;
    });
});