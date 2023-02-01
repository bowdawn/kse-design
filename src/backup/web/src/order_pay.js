jQuery(document).ready(function(){
    jQuery("#chkwrap li a").click(function(){
        var target = jQuery(this).attr("href");
        var position = jQuery(target).offset().top - jQuery(".headerGnb").outerHeight();
        jQuery('html,body').animate({ scrollTop : position }, 100); // 이동
    });
    
    
    
    jQuery(".order-price.btn_discount").click(function(){
    
        if(jQuery(this).hasClass("open")){
            jQuery(this).removeClass("open");
            jQuery(this).next(".discount-box").hide();
        }else{
            jQuery(this).addClass("open");
            jQuery(this).next(".discount-box").show();
        
        }    
    });
    
    
    if(jQuery(".agree-box table tbody").children().length > 0){
        jQuery(".agree-box").hide();    
        
        
        jQuery(".btn_agree").click(function(){
    
            if(jQuery(this).hasClass("open")){
                jQuery(this).removeClass("open");
                jQuery(".agree-box").hide();
            }else{
                jQuery(this).addClass("open");
                jQuery(".agree-box").show();

            }    
        });
    
    }else{    
        jQuery(".btn_agree").hide();
        jQuery(".agree-box").hide();
    }
    
    
    
    
    
    jQuery(window).scroll(function(){
    
        if(jQuery(document).scrollTop() > 200){
        
            var scrollVal = jQuery(document).scrollTop() - 200 ; 
        
            jQuery(".order_right_cont").css("top",(scrollVal+ 104) +"px");
        
        }else{
        
            jQuery(".order_right_cont").css("top","104px");
        
        }
        
    });
    
    
    var pd_cnt = 0; 
    jQuery(".order-table .order_product_count").each(function(){
        pd_cnt += Number(jQuery(this).val());
        
        jQuery(".product_count").text(pd_cnt);    
    });
    
    
    
    
    
    
    
    jQuery("input[name=bankname]").attr("placeholder","입금자명을 입력해 주세요.(주문자와 같을 경우 생략가능)");
    jQuery("#message").attr("placeholder","배송 메시지를 입력해주세요");
    
    
    
    
    
});