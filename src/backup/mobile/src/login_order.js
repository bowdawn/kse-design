$('#login .tab a').click(function(e) {
    e.preventDefault();
    $(this).addClass("act").siblings().removeClass('act');;
    var tab_name = $(this).attr('href');
    $(".login section").hide();
    $("."+tab_name).show();
});
// ��ȸ�� �ֹ���ȸ �˾� �ݱ�
$('.close, .btn_Black', '#inquiryOrder').on('click', function(e) {
    e.preventDefault();
    $(this.hash).hide();
});

jQuery("#keyboard a").click(function() {
    if (jQuery(this).children(".fa").attr("class") == "fa fa-caret-down") {
        jQuery(this).html('�ѱ� ���� �ݱ� <span class="fa fa-caret-up">');
        jQuery(this).parent().parent().find("img").toggle();
    } else {
        jQuery(this).html('�ѱ� ���� ���� <span class="fa fa-caret-down">');
        jQuery(this).parent().parent().find("img").toggle();
    }
});