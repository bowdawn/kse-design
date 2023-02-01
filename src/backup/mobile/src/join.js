$(function(){
    //라디오 버튼 이미지로 작동하게 하기
    checkRadio('#newsRadio');
    checkRadio('#smsRadio');
    
    $('.radioSwitch').on('click',function(e){
        e.preventDefault();
        
        var clickRadioID = '#' + $(this).parents('.radioBtn').attr('id');
        
        if($(this).parents('.radioBtn').find('input:radio').eq(0).is(":checked")){
            $(this).parents('.radioBtn').find('input:radio').eq(1).attr('checked', true);
        }else{
            $(this).parents('.radioBtn').find('input:radio').eq(0).attr('checked', true);
        }
        
        checkRadio(clickRadioID);
    });
    
    //비밀번호 보기
    $('.showPassword').on('click',function(e){
        e.preventDefault();
        
        if(!$(this).hasClass('show')){
            $('.showPassword').addClass('show');
            $(this).siblings('input').prop('type','text');
        }else{
            $('.showPassword').removeClass('show');
            $(this).siblings('input').prop('type','password');
        }
    });
});

function checkRadio(thisRadioWrapClass){
    if($(thisRadioWrapClass).find('input:radio').eq(0).is(":checked")){
        $(thisRadioWrapClass).find('.radioOn').removeClass('dp_no');
        $(thisRadioWrapClass).find('.radioOff').addClass('dp_no');
    }else if($(thisRadioWrapClass).find('input:radio').eq(1).is(":checked")){
        $(thisRadioWrapClass).find('.radioOn').addClass('dp_no');
        $(thisRadioWrapClass).find('.radioOff').removeClass('dp_no');
    }
    
}