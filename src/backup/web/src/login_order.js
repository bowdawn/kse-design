jQuery(document).ready(function(){
    jQuery(".frm-list label").click(function(){
        jQuery(this).hide();
        jQuery(this).next().focus();
    });
    jQuery(".frm-list input").blur(function(){
        if (jQuery(this).val() == ""){
            jQuery(this).prev().show();
            jQuery(".order-num label").hide();
        }
    });
    
    jQuery(".order-num .txt-frm").blur(function(){
        if (jQuery(this).val() == "26�� �Է�" || jQuery(this).val() == "���ڸ� �Է� (14��)" || jQuery(this).val() == "�ֹ���ȣ" ){
            jQuery(this).removeAttr("style");
        } else {
            jQuery(this).css("color","#1c1c1c");
        }
    });
    
    jQuery(".MS_login_id").focus(function(){
        jQuery(this).siblings("label").hide();
    });
    jQuery(".MS_login_pw").focus(function(){
        jQuery(this).siblings("label").hide();
    });
    jQuery("#orderhname").focus(function(){
        jQuery(this).siblings("label").hide();
    });
    jQuery("#ordernumid").focus(function(){
        jQuery(this).siblings("label").hide();
    });
    
    jQuery(".MS_login_id").val('');
});