$(function() {
    $(".faq_a").css("display", "none");

    $('.faq_q').click(function(){
        $(this).next('.faq_a').slideToggle();
        //②クリックされた.questionの兄弟要素の.answerが開いたり閉じたりする。
        $('.question').not($(this)).next('.faq_a').slideUp();
        //③クリックした以外の.questionの兄弟要素の.answerはslideup。
      });
});