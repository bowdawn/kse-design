jQuery("#keyboard a").click(function() {
    if (jQuery(this).children(".fa").attr("class") == "fa fa-caret-down") {
        jQuery(this).html('�ѱ� ���� �ݱ� <span class="fa fa-caret-up">');
        jQuery(this).parent().parent().find("img").toggle();
    } else {
        jQuery(this).html('�ѱ� ���� ���� <span class="fa fa-caret-down">');
        jQuery(this).parent().parent().find("img").toggle();
    }
});