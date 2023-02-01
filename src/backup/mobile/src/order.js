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

$('input[name=radio_paymethod]').click(function() {
    $('#order .pay-info dl dt').removeClass('now');
    $(this).parents('dt').addClass('now');    
});

$('.all-ok').click(function() {
    $(".Write-deli .order-info-detail").show();
    $(".Write-deli .order-info-simple").hide();
    $(".Write-order .order-info-detail").show();
    $(".Write-order .order-info-simple").hide();
});

// 모바일 주소록
jQuery(document).ready(function(){
    if (typeof is_useable_addrbook != 'undefined') {
       if (is_useable_addrbook == '') { 
         jQuery('.btn-adr-layer').text('배송지 목록');
         jQuery('.btn-adr-layer').width('67px');
       }
    }
});

// 모바일 주소록
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