
$('.phone').change(function () {
    var val1 = $(this).val();
    console.log('1つめ' + val1);

    var selectNumId = '#' + val1;
    // $('ul li').hide();
    //選択したブロックのみを表示
    $(selectNumId).show();
});

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true
  });
});