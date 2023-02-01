$('.frm li label', '#reconfirmPasswd').focusin(function() {
    $(this).find('span').hide();
}).focusout(function() {
    if ($(this).find('input').val() == '') {
        $(this).find('span').show();
    }
});

$(function(){
    $('.showPassword').on('click',function(e){
        e.preventDefault();
        
        if(!$(this).hasClass('show')){
            $('.showPassword').addClass('show');
            $('#user_password').prop('type','text');
        }else{
            $('.showPassword').removeClass('show');
            $('#user_password').prop('type','password');
        }
    });
});