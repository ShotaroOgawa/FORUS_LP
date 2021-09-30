$(function() {
    $(".faq_a").css("display", "none");

    $('.faq_q').click(function(){
        $(this).next('.faq_a').slideToggle();
        //②クリックされた.questionの兄弟要素の.answerが開いたり閉じたりする。
        $('.faq_q').not($(this)).next('.faq_a').slideUp();
        //③クリックした以外の.questionの兄弟要素の.answerはslideup。
      });

      $('input:submit[id="btn_submit"]').click(function(){
		if(!input_check()){
			return false;
		}
	});

    



});