// ハンバーガーメニュー
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.globalMenu').addClass('active');
      $('.ham_line1').css({
        transform: "rotate(45deg)",
        top: "46px",
      });
      $('.ham_line2').css('width', '0');
      $('.ham_line3').css({
        transform: "rotate(-45deg)",
        top: "46px"
      });
      $('.globalMenu').css({
        transform: "translateY(0%)"
      });
      $('.main').css({
        opacity: "0.3",
        transition: "0.5s ease-out"
      });
    } else {
      $('.globalMenu').removeClass('active');
      $('.ham_line1').css({
        transform: "",
        top: ""
      });
      $('.ham_line2').css('width', '');
      $('.ham_line3').css({
        transform: "",
        top: ""
      });
      $('.globalMenu').css({
        transform: ""
      });
      $('.main').css({
        opacity: "",
        transition: ""
      });
    }
  });

  $('.globalMenu a[href]').on('click', function (event) {
    $('.hamburger').trigger('click');
  });

});

// アコーディオンメニュー
$(function () {
  $('.accordion-content02').hide();
  $('.accordion-content03').hide();
  $('.accordion-click').click(function () {
    $(this).next().slideToggle();
    return false;
  });
});


// ページ内リンク
$(function () {
  var headerHight = 100; //ヘッダの高さ
  $('a[href^=#]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
  });
});

// ・スクロールアニメーション
AOS.init()