(function($){
$(function(){
$('.cart-free-wrap > .btn-list-open').click(function(){
$(this).toggleClass('open');
if ( $(this).hasClass('open') ){
$(this).html('������ ��õ��ǰ �ݱ�');
} else {
$(this).html('������ ��õ��ǰ ����');
}
$('.cart-free-wrap .list-wrap').toggle();
});
});
})(jQuery);