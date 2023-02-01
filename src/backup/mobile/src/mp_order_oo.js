$(function() {
    // 상세 열기
    $('#order-list .detail a.btn_White').live('click', function(e) {
        e.preventDefault();
        $(window).data({ scroll: $(window).scrollTop() });
        $(this).children().toggleClass('fa-rotate-180');
        $(this).parents('div:first').find('table').toggle();
    });
});

$( document ).ajaxComplete(function() {
    $(".ncount").each(function() {
        var nwid = $(this).find("a");
		if (nwid.length == 1) {
			$(this).find("a").width('100%');
		} else if (nwid.length == 2) {
			$(this).find("a").width('50%');
		} else if (nwid.length == 3) {
			$(this).find("a").width('33.3%');
		} else if (nwid.length == 4) {
			$(this).find("a").width('50%');
		}
    });
});