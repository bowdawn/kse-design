$('.frm li label input', '#reconfirmPasswd').focusin(function() {
    $(this).siblings('span').hide();
}).focusout(function() {
    if ($(this).val() == '') {
        $(this).siblings('span').show();
    }
});
$('.frm li label span', '#reconfirmPasswd').click(function() {
    $(this).hide();
    $(this).siblings('input').focus();
});