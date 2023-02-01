jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 20) {
        jQuery('.btn_fixedFooter').css("opacity","1");
    } else {
        jQuery('.btn_fixedFooter').css("opacity","0");
    }
});


jQuery("a[href='#ready']").click(function(){
    alert("준비중입니다.");
});


//상단으로 이동
jQuery(".section_fixedFooter .btn_toggle_area .btn_fixedFooter.gotop").on('click',function(){
    jQuery("body,html").animate({scrollTop:0},200);
    return false;
});

//하으로 이동
jQuery(".section_fixedFooter .btn_toggle_area .btn_fixedFooter.godown").on('click',function(){
    jQuery("body,html").animate({scrollTop:($(document).height())},200);
    return false;
});