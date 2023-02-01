(function($){
$(function(){
$('.cart-free-wrap > .btn-list-open').click(function(){
$(this).toggleClass('open');
if ( $(this).hasClass('open') ){
$(this).html('무료배송 추천상품 닫기');
} else {
$(this).html('무료배송 추천상품 보기');
}
$('.cart-free-wrap .list-wrap').toggle();
});
});
})(jQuery);