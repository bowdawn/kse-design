$('#login .tab a').click(function(e) {
    e.preventDefault();
    $(this).addClass("act").siblings().removeClass('act');;
    $(this).addClass("kse-btn-default-active").siblings().removeClass('kse-btn-default-active');;
    var tab_name = $(this).attr('href');
    $(".login section").hide();
    $("."+tab_name).show();
});
// ��ȸ�� �ֹ���ȸ �˾� �ݱ�
$('.close, .btn_Black', '#inquiryOrder').on('click', function(e) {
    e.preventDefault();
    $(this.hash).hide();
});

