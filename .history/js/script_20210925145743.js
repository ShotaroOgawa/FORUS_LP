$(function() {
    $(".faq_a").css("display", "none");

    $('.faq_q').click(function(){
        $(this).next('.faq_a').slideToggle();
        //②クリックされた.questionの兄弟要素の.answerが開いたり閉じたりする。
        $('.faq_q').not($(this)).next('.faq_a').slideUp();
        //③クリックした以外の.questionの兄弟要素の.answerはslideup。
      });

//↑ FAQ-----------
       // ①submit()に関数をバインド
  $('form').submit(function() {
 
    // ②ダイアログを出していいえを選択したら…
    if (!confirm('送信しますか？')) {
 
      // 処理を中断
      return false;
 
    }}else if {
        
    }
  });
});


