(function($){
 $(function(){
  $('.cart-free-wrap > .btn-list-open').click(function(){
   $(this).find('span').toggleClass('open');

   if ( $(this).find('span').hasClass('open') ){
    $(this).html('������ ��õ��ǰ <span class=open></span>');
   } else {
    $(this).html('������ ��õ��ǰ <span></span>');
   }
   $('.cart-free-wrap .list-wrap').toggle();
  });
 });
})(jQuery);