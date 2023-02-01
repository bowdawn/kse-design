jQuery(document).ready(function(){
    jQuery(".frm-list label").click(function(){
        jQuery(this).hide();
        jQuery(this).next().focus();
    });
    jQuery(".frm-list input").blur(function(){
        if (jQuery(this).val() == ""){
            jQuery(this).prev().show();
        }
    });
    jQuery("#name").focus(function(){
        jQuery("#name").siblings("label").hide();
    });
    jQuery("#find_id_email").focus(function(){
        jQuery("#find_id_email").siblings("label").hide();
    });
    jQuery("#find_id_mobile").focus(function(){
        jQuery("#find_id_mobile").siblings("label").hide();
    });
    jQuery("#user_id").focus(function(){
        jQuery("#user_id").siblings("label").hide();
    });
    jQuery("#email").focus(function(){
        jQuery("#email").siblings("label").hide();
    });
    jQuery("#mobile").focus(function(){
        jQuery("#mobile").siblings("label").hide();
    });
});
