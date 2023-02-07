/*�ֻ�� �̺�Ʈ��� ����*/
jQuery("#xbtn").click(function () {
    setCookie("showCookies", "N", 1); //1�ϵ��� �����Ǵ� ��Ű ����
    jQuery('#topBnr').hide(); // ���̾� ����
});


if (getCookie("showCookies") != "N") {
    jQuery("#topBnr").show(); // showCookies ��� �̸��� ��Ű ���� "N" �� �ƴϸ� ���̾� ������
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
        alert('������, �����е�迭�� ���� Ȩ��ư �߰��� ����ϼž� �մϴ�.');
    } else {
        alert(title+'��(��) Ȩȭ�鿡 �߰��մϴ�. ���̹����� ���� ���Բ����� ���̹��� ��ġ�������� �̵��˴ϴ�.');
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



//���̵�޴� ����

jQuery("#menu").click(function() {   
        jQuery("aside, #mask").show();
     
});



//���̵�޴� Ŭ��¡
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
    alert(" *��ȸ���� �����Դϴ�.\n ȸ�����Ǵ� ������������ �̿��ϼ���.");
    });
});


jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 40) {
        jQuery('.headerBottom').addClass("top-pt-02");
    } else {
        jQuery('.headerBottom').removeClass("top-pt-02");
    }
});
