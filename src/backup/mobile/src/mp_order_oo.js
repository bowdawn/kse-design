$(function() {
    // 상세 열기
    $('#order-list .detail a.btn_White').live('click', function(e) {
        e.preventDefault();
        $(window).data({ scroll: $(window).scrollTop() });
        $(this).children().toggleClass('fa-rotate-180');
        $(this).parents('div:first').find('table').toggle();
    });
});

