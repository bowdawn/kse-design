// 본인인증 선택
$('.auth-confirm .btnArea a').click(function(){
	$(this).addClass('on').siblings('a').removeClass('on');
});

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

/* 레이어 팝업 checkbox */
$(document).on('click', '.pop-layer-agree input:checkbox', function() {
   $(".pop-layer-agree").hide();
});