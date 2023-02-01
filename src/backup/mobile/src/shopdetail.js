$(".MK_optAddWrap .MK_inner-opt-cm .MK_qty-ctrl .btn-type-02.plus span").text("+");
$(".MK_optAddWrap .MK_inner-opt-cm .MK_qty-ctrl .btn-type-02.minus span").text("-");




$(function() {
    var fixedBtn = $("#contents .fixed-btn");
    $(window).scroll(function(e) {
        var fixed_target = $("#contents .shopdetailButtonTop"),
        fixed_target_top = fixed_target.offset()["top"];
        if ($(window).scrollTop() > fixed_target_top) {
            if (!fixedBtn.hasClass('fixed')) {
                fixedBtn.addClass("fixed");
                $(".section_fixedFooter").addClass("cs-button");
            }
        } else {
            if (fixedBtn.hasClass('fixed')) {
                fixedBtn.removeClass("fixed");
                fixedBtn.parent().removeClass("fixed");
                fixedBtn.children("a").show();
                fixedBtn.siblings(".buy_on").hide();
                $(".section_fixedFooter").removeClass("cs-button");
            }
        }
    });
    fixedBtn.click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("fixed");
        fixedBtn.children("a").toggle();
        fixedBtn.siblings(".buy_on").show();
    });
    
    

    
    
});
$(".btn_toggle").click(function(){
    $(this).find(".fa").toggleClass("fa-rotate-180");
    $(this).next("div").toggle();
});
var nwid = Math.floor([100/$(".ncount").find("a").size()]*100)/100;
$(".ncount a").width(nwid+"%");

$("#pop_btn").click(function(){
    if($(this).next("ul").is(":visible")){
         $(this).children("img").attr("src","/design/ksilverex/supermarket/mimg/M_SNS.png");
         $(this).next("ul").slideUp(100);
    }else{
         $(this).children("img").attr("src","/design/ksilverex/supermarket/mimg/sns-x.png");
         $(this).next("ul").slideDown(100);
    }
});