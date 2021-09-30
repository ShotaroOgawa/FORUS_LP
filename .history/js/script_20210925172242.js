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
  $('.contact_BtnSubmit').click(function() {

    if(!input_check()){
        return false;
    }
    return false;
  });
});

function input_check(){
	var result = true;

	// エラー用装飾のためのクラスリセット
	$('#name').removeClass("inp_error");
	
	
	$('#mailaddress').removeClass("inp_error");

	$('#remarks').removeClass("inp_error");

	// 入力エラー文をリセット
	$("#name_error").empty();
	

	$("#mailaddress_error").empty();
	
	$("#remarks_error").empty();

	// 入力内容セット
	var name   = $("#name").val();
	

	var mailaddress  = $("#mailaddress").val();

	var remarks  = $("#remarks").val();

	// 入力内容チェック

	// お名前
	if(name == ""){
		$("#name_error").html(" お名前は必須です。");
		$("#name").addClass("inp_error");
		result = false;
	}else if(name.length > 25){
		$("#name_error").html(" お名前は25文字以内で入力してください。");
		$("#name").addClass("inp_error");
		result = false;
	}
	// メールアドレス
	if(mailaddress == ""){
		$("#mailaddress_error").html(" メールアドレスは必須です。");
		$("#mailaddress").addClass("inp_error");
		result = false;
	}else if(!mailaddress.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
		$('#mailaddress_error').html(" 正しいメールアドレスを入力してください。");
		$("#mailaddress").addClass("inp_error");
		result = false;
	}else if(mailaddress.length > 255){
		$('#mailaddress_error').html(" 正しいメールアドレスを入力してください。");
		$("#mailaddress").addClass("inp_error");
		result = false;
	}
	
	// お問い合わせ内容
	if(remarks == ""){
		$("#remarks_error").html(" お問い合わせ内容は必須です。");
		$("#remarks").addClass("inp_error");
		result = false;
	}else if(remarks.match(/[<(.*)>.*<\/\1>]/)){
		$('#remarks_error').html(" HTML、URLの貼りつけは禁止しています。");
		$("#remarks").addClass("inp_error");
		result = false;
	}else if(remarks.match(/^[ 　\r\n\t]*$/)){
		$('#remarks_error').html(" お問い合わせ内容は必須です。");
		$("#remarks").addClass("inp_error");
		result = false;
	}

	return result;
}



