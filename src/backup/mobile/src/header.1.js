/*최상단 이벤트배너 제어*/
jQuery("#xbtn").click(function () {
    setCookie("showCookies", "N", 1); //1일동안 유지되는 쿠키 생성
    jQuery('#topBnr').hide(); // 레이어 감춤
});


if (getCookie("showCookies") != "N") {
    jQuery("#topBnr").show(); // showCookies 라는 이름의 쿠키 값이 "N" 이 아니면 레이어 보여줌
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + '; Path=/;';
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    
    
    
    function mobile_homebutton(title) {
    var page_uri = "http://" + document.domain,
         main_uri = page_uri + "/m/main.html",
         icon_uri = '',
         user_agent = navigator.userAgent.toLowerCase();
    var title = (title.length > 0) ? title : shop_name,
         encode_title = encodeURI(title);

    (function(jQuery) {
        jQuery(function() {
            jQuery('link').each(function() {
                if (jQuery(this).attr('rel') == "apple-touch-icon-precomposed") {
                    icon_uri = page_uri + jQuery(this).attr('href');
                }
            });
        });
    })(jQuery);

    var call_uri= "intent://addshortcut?url="+main_uri +"&icon="+icon_uri +"&title="+encode_title+"&oq="+encode_title+"&serviceCode=nstore&version=7#Intent;scheme=naversearchapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.search;end";
    if (user_agent.match(/ipad|iphone|ipod/g)) {
        alert('아이폰, 아이패드계열은 직접 홈버튼 추가를 사용하셔야 합니다.');
    } else {
        alert(title+'을(를) 홈화면에 추가합니다. 네이버앱이 없는 고객님께서는 네이버앱 설치페이지로 이동됩니다.');
        document.location.href = call_uri;
    }
}





jQuery(window).ready(function() {
    function loop() {
        jQuery('#point').animate ({ top: '+=4' }, 200) 
            .animate({ top: '-=4' }, 200)
            .animate({ top: '+=4' }, 200)
            .animate({ top: '-=4' }, 200)
            .animate({top:26}, 1600, function() {
            loop();
        });
    }
    loop();
});



//사이드메뉴 오픈

jQuery("#menu").click(function() {   
        jQuery("aside, #mask").show();
     
});



//사이드메뉴 클로징
jQuery("#close_btn").click(function() {   
        jQuery("aside, #mask").hide();
});




jQuery(".categoryOpenBtn").click(function() {
   
    jQuery(this).children(".fa-angle-down").toggleClass("fa-rotate-180");
    jQuery(this).parent().children(".kse-collapse-content").toggle();
  

   
    return false
});



jQuery("#category").click(function() {
    jQuery(this).addClass("act").siblings().removeClass("act");
    jQuery(".navCategory").show();
    jQuery(".navCommunity, .navMypage").hide();
});

jQuery("#community").click(function() {
    jQuery(this).addClass("act").siblings().removeClass("act");
    jQuery(".navCommunity").show();
    jQuery(".navCategory, .navMypage").hide();
});
jQuery("#mypage").click(function() {
    jQuery(this).addClass("act").siblings().removeClass("act");
    jQuery(".navMypage").show();
    jQuery(".navCategory, .navCommunity").hide();
});

jQuery("#btn_lastView").click(function() {
    jQuery("#ly_lastView").show();
});
jQuery("#ly_lastView .fa-times").click(function() {
    jQuery("#ly_lastView").hide();
});
jQuery(function() {
    jQuery("aside a[href='/m/personal.html?type=guest']").click(function(e) {
    alert(" *비회원용 문의입니다.\n 회원문의는 마이페이지를 이용하세요.");
    });
});


jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 40) {
        jQuery('.headerBottom').addClass("top-pt-02");
    } else {
        jQuery('.headerBottom').removeClass("top-pt-02");
    }
});
