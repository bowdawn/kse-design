$(".btn_toggle").click(function() {
    if ($(this).children(".fa").attr("class") == "fa fa-caret-up") {
        $(".user-info").toggle();
        $(this).html('상세보기 <span class="fa fa-caret-down">');
    } else {
        $(".user-info").toggle();
        $(this).html('닫기 <span class="fa fa-caret-up">');
    }
});