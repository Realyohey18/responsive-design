$(function(){
  
    //フロートヘッダーメニュー
    var targetHeight = $('.js-float-menu-target').height();
    //heroバナー（section one）の高さ取得
  console.log(targetHeight);
    $(window).on('scroll', function() {
        $('.js-float-menu').toggleClass('float-active',$(this).scrollTop() > targetHeight);
    });
    
     
    //spメニュー
    $('.js-toggle-sp-menu').on('click', function(){
      $(this).toggleClass('active');
      $('.js-toggle-sp-menu-target').toggleClass('active');
    });
});
