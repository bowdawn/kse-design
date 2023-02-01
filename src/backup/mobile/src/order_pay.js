$(".Write-order .order-info-simple .btn_White").click(function(e) {
    e.preventDefault();
    $(".Write-order .order-info-detail").show();
    $(".Write-order .order-info-simple").hide();
});

$(".Write-deli .order-info-simple .btn_White").click(function(e) {
    e.preventDefault();
    $(".Write-deli .order-info-detail").show();
    $(".Write-deli .order-info-simple").hide();
});


/*
$('input[name=radio_paymethod]').click(function() {
    $('#order .pay-info dl dt').removeClass('now');
    $(this).parents('dt').addClass('now');    
});
*/






$('.all-ok').click(function() {
    $(".Write-deli .order-info-detail").show();
    $(".Write-deli .order-info-simple").hide();
    $(".Write-order .order-info-detail").show();
    $(".Write-order .order-info-simple").hide();
});


//쿠폰사용 취소 버튼 보이기
$('#coupon .layer .btn_Black').click(function() {
    if($('#coupon input[name="selected_coupon"]:checked').length > 0) {
      $('#order .coupon_cancel').show();
    }
});
//쿠폰사용 취소 버튼 숨기기
$('#order .coupon_cancel, #coupon .layer .layer-pop .close, #coupon .layer .btn_White').click(function() {
  setTimeout(function() {
    if(!$('input[name="couponnum"]', 'form[name="form1"]').val()) {
      $('#order .coupon_cancel').hide();
    }
  }, 100);
});
//해외배송 선택 시 과거 국내 배송지 숨기기
$('#mk_ems_overseas_label').click(function() {
    if ($('#mk_ems_overseas').is(':checked') === true) {
        $(".korea-radio-addr").hide();
    }
});
$('#mk_ems_kor_label').click(function() {
    $(".korea-radio-addr").show();
});


jQuery(document).ready(function(){

    jQuery(".order-price.btn_discount").click(function(){
    
        if(jQuery(this).hasClass("open")){
            jQuery(this).removeClass("open");
            jQuery(this).next(".discount-box").hide();
        }else{
            jQuery(this).addClass("open");
            jQuery(this).next(".discount-box").show();
        
        }    
    });
    
    
    jQuery('input[name=radio_paymethod]').each(function(){    
    
        if(jQuery(this).attr("checked")){
        
            //jQuery(".pay_method_title, .pay_method_list").removeClass("now");            
            jQuery(this).parents(".pay_method_title").addClass("now");
            
            var _type = jQuery(this).parents(".pay_method_title").attr("data-pay");
            
            jQuery(".pay_method_list").each(function(){
            
                if(jQuery(this).attr("data_pay") == _type){
                    jQuery(this).addClass("now");
                }
            });
            
            
        }
    
        
    });
    
    
     jQuery('input[name=radio_paymethod]').click(function(){    
     
     
         jQuery(".pay_method_title, .pay_method_list").removeClass("now");            
            jQuery(this).parents(".pay_method_title").addClass("now");
            
            var _type = jQuery(this).parents(".pay_method_title").attr("data-pay");
            
            jQuery(".pay_method_list").each(function(){
            
                if(jQuery(this).attr("data_pay") == _type){
                    jQuery(this).addClass("now");
                }
            });
            
            
     });
     
     
     
     jQuery("input[name=bankname]").attr("placeholder","입금자명을 입력해 주세요.(주문자와 같을 경우 생략가능)");
     jQuery("#message").attr("placeholder","배송 메시지를 입력해주세요");
     
     
     var pd_cnt = 0; 
    jQuery(".prd_order .order-count .order_product_count").each(function(){
        pd_cnt += Number(jQuery(this).val());
        
        jQuery(".pay2_table .product_count").text(pd_cnt);    
    });
    
    
    
    
    
    
    if(jQuery(".agree-box > .wrapper").children().length > 0){
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
    
     
     
     
     
    /*
    $('input[name=radio_paymethod]').click(function() {
        $('#order .pay-info dl dt').removeClass('now');
    $(this).parents('dt').addClass('now');    
    
    */

    
    
    
    
});


// 모바일 주소록
if (typeof is_useable_addrbook != 'undefined') {
     if (is_useable_addrbook == '') { 
         jQuery('.btn-adr-layer').text('배송지 목록');
         jQuery('.btn-adr-layer').width('67px');
     }
}

jQuery('.btn-adr-layer').click(function() {
    setTimeout(function() {
       jQuery('.btn-black.btn-apply-addrbook').prop('href','#none');
          if (jQuery('#tab_addrbook').is(':visible')) {
             jQuery('#contact_multi_del_past').hide();
             jQuery('#contact_close_black').hide();
          } else {
             jQuery('#contact_multi_del_past').show();
             jQuery('#contact_close_black').show();
             jQuery("input:radio[name='place']:radio[value='A']").prop('checked', true); 
             addrclick();
          }
     }, 30);
     addrbook_focus();
});
    
jQuery('#tab_addrbook').click(function() {
   addrbook_focus();
});
    
jQuery('#tab_past').click(function() {
   addrbook_focus();
});

function addrbook_focus () {
   setTimeout(function() {
        jQuery('.btn-black.btn-apply-addrbook').prop('href','#none');
        jQuery('.btn-adr-layer').focus();
   }, 500);
}