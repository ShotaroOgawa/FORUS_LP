
jQuery(function ($) {
  $(".faq").css("display", "none");
  // ①答えを非表示  

  $('.question').click(function(){
    $(this).next('.answer').slideToggle();
    //②クリックされた.questionの兄弟要素の.answerが開いたり閉じたりする。
    $('.question').not($(this)).next('.answer').slideUp();
    //③クリックした以外の.questionの兄弟要素の.answerはslideup。
  });
});
</script>