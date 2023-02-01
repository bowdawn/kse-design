jQuery(document).ready(function(){
    jQuery(".new-privercy-contract li a").click(function(){
        var target = jQuery(this).attr("href");
        var position = jQuery(target).offset().top - jQuery(".headerGnb").outerHeight();
        jQuery('html,body').animate({ scrollTop : position }, 100); // ¿Ãµø
        
    });
});