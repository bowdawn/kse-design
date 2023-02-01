/* toggle */
$('.form-title').on('click', function() {
  var $target = $(this).siblings();

  if ($(this).hasClass('off')) {
      $(this).removeClass('off');
      $target.show();
  } else {
      $(this).addClass('off');
      $target.hide();
  }
});
$('.form-wrap:not(.required-wrap) .form-title').trigger('click');

/* ·¹ÀÌ¾î ÆË¾÷ checkbox */
$(document).on('click', '.pop-layer-agree input:checkbox', function() {
   $(".pop-layer-agree").hide();
});