$(".btn_toggle").click(function() {
    if ($(this).children(".fa").attr("class") == "fa fa-caret-up") {
        $(".user-info").toggle();
        $(this).html('�󼼺��� <span class="fa fa-caret-down">');
    } else {
        $(".user-info").toggle();
        $(this).html('�ݱ� <span class="fa fa-caret-up">');
    }
});