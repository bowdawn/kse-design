jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 20) {
        jQuery('.btn_fixedFooter').css("opacity","1");
    } else {
        jQuery('.btn_fixedFooter').css("opacity","0");
    }
});


jQuery("a[href='#ready']").click(function(){
    alert("�غ����Դϴ�.");
});


//������� �̵�
jQuery(".section_fixedFooter .btn_toggle_area .btn_fixedFooter.gotop").on('click',function(){
    jQuery("body,html").animate({scrollTop:0},200);
    return false;
});

//������ �̵�
jQuery(".section_fixedFooter .btn_toggle_area .btn_fixedFooter.godown").on('click',function(){
    jQuery("body,html").animate({scrollTop:($(document).height())},200);
    return false;
});