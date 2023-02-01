$(function(){
    $('.totalCoupon').text($('.couponList li').length);
    
    $('.openAddCoupon a').on('click',function(){
        $(this).hide();
        $('.addCouponCon').show();
    })
})