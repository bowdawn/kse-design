$(".btn1").click(function(e) {
    e.preventDefault();
    if ($('#section1').hasClass('on') == true) {
        $(".list1").hide();
        $(this).html('상세보기 <span class="fa fa-caret-down">');
        $('#section1').removeClass('on');
    } else {
        $(".list1").show();
        $(this).html('닫기 <span class="fa fa-caret-up">');
        $('#section1').addClass('on');
    }
});

$(".btn2").click(function(e) {
    e.preventDefault();
    if ($('#section2').hasClass('on') == true) {
        $(".list2").hide();
        $(this).html('상세보기 <span class="fa fa-caret-down">');
        $('#section2').removeClass('on');
    } else {
        $(".list2").show();
        $(this).html('닫기 <span class="fa fa-caret-up">');
        $('#section2').addClass('on');
    }
});