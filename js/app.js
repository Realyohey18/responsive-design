$(function(){
  
    //フロートヘッダーメニュー
    var targetHeight = $('.js-float-menu-target').height();
    //heroバナー（section one）の高さを取得
  console.log(targetHeight);//この場合、700px
    $(window).on('scroll', function() {
        $('.js-float-menu').toggleClass('float-active',$(this).scrollTop() > targetHeight);
    });
     //⬆️説明：スクロールが７00px以上、下になった時に.js-float-menu(headerの部分)に.float-activeをつける。
     //もしくはその反対の意味もある。
     
    //spメニュー
    $('.js-toggle-sp-menu').on('click', function(){
      $(this).toggleClass('active');
      $('.js-toggle-sp-menu-target').toggleClass('active');
    });
});