var gap_cart_free = 0,
    total_delivery = 0,
    use_cart_free = 'N';
$('.display-cart-free-wrap').hide();

//��ٱ��� �����۱��� ���� �ݾ�, ��ۺ� �˾ƿ��� ajax 
function cal_basket_chk(obj) {
    jQuery.ajax({
        type : 'POST',
        url : '/shop/basket.html',
        dataType : 'json',
        async : true,
        data : { pop_cartfree : 'Y' },
        success : function(res) {
            if (res.RESULT !== true) {
                if (res.MSG.length > 0) {
                    alert(res.MSG);
                    location.reload();
                } else {
                    alert('��ǰ �ɼ��� ����Ǿ� �ֹ��� �Ұ����� ��ǰ�� �����մϴ�');
                }
            }
            // �� �ݾ� ����
            var total_data = res.TOTAL;

            //�������� ��밡������ üũ 
            var is_use_cart_free = total_data.is_use_cart_free;

            //��ٱ��Ͽ� ��� �ݾ�
            var total_price_sell = total_data.total_price_sell;

            //īƮ���� ��뿩��
            use_cart_free = total_data.use_cart_free;

            //��ۺ�
            total_delivery = total_data.total_delivery;

            //�����۱��� ���� �ݾ�
            gap_cart_free = total_data.gap_cart_free;

            if (use_cart_free == 'Y' && total_price_sell == 0) {
                //��ٱ��Ͽ� ���� ���� ����
                $(".cf-none").show();
            } else if (use_cart_free == 'Y' && total_delivery == 0 && (total_delivery <= 0 || gap_cart_free <= 0)) {
                //īƮ���� ����ϴµ� ������ ����
                $(".cf-ok").show();
            } else if (use_cart_free == 'Y' && is_use_cart_free == true && total_delivery > 0 && gap_cart_free > 0) {
                //īƮ���� ��� ���� 
                $('#MK_cartfree_price').html(gap_cart_free + '��');
                //īƮ���� ����Ʈ �ε� 
                get_cart_free_list();
                $('.display-cart-free-wrap').show();
            } else {
                //īƮ���� �̻�� ���� 
                $(".cf-no-use").show();
            }
        }, error : function() {
            alert('��� �� �õ����ֽñ� �ٶ��ϴ�');
        }
    });
}

cal_basket_chk();
 
var cart_free_page = 1;
function get_cart_free_list() {
    (function($) {
        $.ajax({
            url: './cartfree_product.ajax.html?r=' + Math.random(),
            type: 'GET',
            dataType: 'json',
            data: {
                action_mode: 'get_cart_free_list',
                page: cart_free_page,
                gap_cart_free: gap_cart_free,
                from_page : 'pop_cartfree'
            },
            success: function(response) {
                // ���� ������ ��
                if ($('#MS_current_page_cnt').length > 0) {
                    $('#MS_current_page_cnt').html(cart_free_page);
                }
                // �� ������ ��
                if ($('#MS_total_page_cnt').length > 0) {
                    $('#MS_total_page_cnt').html(response.total_page_cnt);
                }
                $('#MS_cartfree_product').append(response.html);
                cart_free_page = response.next_page;
                if (response.is_page_end == true) {
                    $('#MS_cartfree_product_more').hide();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    })(jQuery);
}