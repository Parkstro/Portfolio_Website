/* global $ jQuery Parallax */

import Parallax from 'parallax-js';

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
    
    var scene = document.getElementById();
    var parallax = new Parallax(scene);
    
    
    parallax.enable();
    parallax.disable();
    parallax.updateLayers(); // Useful for reparsing the layers in your scene if you change their data-depth value
    parallax.calibrate(false, true);
    parallax.invert(false, true);
    parallax.limit(false, 10);
    parallax.scalar(2, 8);
    parallax.friction(0.2, 0.8);
    parallax.origin(0.0, 1.0);
    
});